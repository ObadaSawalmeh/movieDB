import { FilterSidebar } from "components/FilterSidebar/FilterSidebar";
import { LoadingProgressBar } from "components/LoadingProgressBar/LoadingProgressBar";
import { MovieGrid } from "components/MovieGrid/MovieGrid";
import { useTmdb } from "hooks/useTmdb";
import { useUrlFilters } from "hooks/useUrlFilters";
import { useEffect, useRef, useState } from "react";
import {
  ContentArea,
  FilterHeader,
  FilterWrapper,
  LoadMoreButton,
  PageWrapper,
} from "./PopularMovies.styles";

function PopularMovies() {
  const defaultFilters = {
    selectedGenres: [],
    searchKeyword: "",
    sortBy: "popularityDescending",
  };

  // Use URL-based filter management
  const { filters, updateFilters, isInitialized } =
    useUrlFilters(defaultFilters);

  const [currentEndpoint, setCurrentEndpoint] = useState("/movie/popular");
  const [queryParams, setQueryParams] = useState({});
  const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);
  const contentAreaRef = useRef(null);

  // Handle filter changes from FilterSidebar
  const handleFiltersChange = (newFilters) => {
    console.log("Filters changed:", newFilters);
    // Reset infinite scroll when filters change
    setIsInfiniteScrollEnabled(false);
    updateFilters(newFilters);
  };

  // Update endpoint and query params based on filters
  useEffect(() => {
    if (!isInitialized) return; // Wait for URL filters to be parsed

    const { selectedGenres, searchKeyword, sortBy } = filters;

    let endpoint = "/movie/popular";
    let params = {};

    // If there's a search keyword, use search endpoint
    if (searchKeyword && searchKeyword.trim()) {
      endpoint = "/search/movie";
      params.query = searchKeyword.trim();
    } else if (selectedGenres.length > 0 || sortBy !== "popularityDescending") {
      // Use discover endpoint for genre filtering and custom sorting
      endpoint = "/discover/movie";

      if (selectedGenres.length > 0) {
        // selectedGenres now contains TMDB genre IDs (numbers)
        params.with_genres = selectedGenres.join(",");
      }

      // Map sortBy values to TMDB API format
      const sortMapping = {
        popularityDescending: "popularity.desc",
        popularityAscending: "popularity.asc",
        releaseDateDescending: "release_date.desc",
        releaseDateAscending: "release_date.asc",
        ratingDescending: "vote_average.desc",
        ratingAscending: "vote_average.asc",
      };

      params.sort_by = sortMapping[sortBy] || "popularity.desc";
    }

    // Add minimum vote count for better results quality
    if (endpoint === "/discover/movie") {
      params.vote_count_gte = 50;
    }

    console.log("Final endpoint and params:", { endpoint, params });
    setCurrentEndpoint(endpoint);
    setQueryParams(params);
  }, [filters, isInitialized]);

  const { data, loading, error, loadMore } = useTmdb(
    currentEndpoint,
    queryParams
  );

  // Reset infinite scroll when filters change (data resets)
  useEffect(() => {
    if (data?.page === 1 && data?.results?.length > 0) {
      setIsInfiniteScrollEnabled(false);
    }
  }, [data?.page, data?.results?.length]);

  // Updated useEffect for scroll handling
  useEffect(() => {
    const contentArea = contentAreaRef.current;
    if (!contentArea) return;

    let isFetching = false;
    let rafId = null;

    const checkScrollPosition = () => {
      // Early exit conditions
      if (
        !isInfiniteScrollEnabled ||
        isFetching ||
        loading ||
        data?.page >= data?.total_pages
      ) {
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = contentArea;
      const scrollPosition = scrollTop + clientHeight;
      const triggerThreshold = 500; // pixels from bottom to trigger load

      if (scrollHeight - scrollPosition <= triggerThreshold) {
        isFetching = true;
        loadMore();
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          checkScrollPosition();
          rafId = null;
        });
      }
    };

    contentArea.addEventListener("scroll", handleScroll);

    // Initial check in case content doesn't fill the screen
    checkScrollPosition();

    return () => {
      contentArea.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInfiniteScrollEnabled, loading, data, loadMore]);
  // Modified loadMore handler
  const handleLoadMoreClick = () => {
    if (data?.page < data?.total_pages) {
      loadMore();
      // Only enable infinite scroll after first manual load
      if (!isInfiniteScrollEnabled) {
        setIsInfiniteScrollEnabled(true);
      }
    }
  };
  // Handle load more button click
  // Don't render until filters are initialized from URL
  if (!isInitialized) {
    return <LoadingProgressBar loading={true} />;
  }

  return (
    <>
      <LoadingProgressBar loading={loading} />
      <PageWrapper>
        <FilterWrapper>
          <FilterHeader>
            <h2>Popular Movies</h2>
          </FilterHeader>
          <FilterSidebar
            onFiltersChange={handleFiltersChange}
            initialFilters={filters}
          />
        </FilterWrapper>

        <ContentArea ref={contentAreaRef}>
          <MovieGrid movies={data?.results} error={error} />

          {data?.page < data?.total_pages && !isInfiniteScrollEnabled && (
            <LoadMoreButton $isActive={!loading} onClick={handleLoadMoreClick}>
              Load More
            </LoadMoreButton>
          )}
        </ContentArea>
      </PageWrapper>
    </>
  );
}

export default PopularMovies;
