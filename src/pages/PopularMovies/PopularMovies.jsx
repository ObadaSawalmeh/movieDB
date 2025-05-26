import { FilterSidebar } from "components/FilterSidebar/FilterSidebar";
import { LoadingProgressBar } from "components/LoadingProgressBar/LoadingProgressBar";
import { MovieGrid } from "components/MovieGrid/MovieGrid";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import { useMovieEndpointParams } from "hooks/useMovieEndpointParams";
import { useTmdb } from "hooks/useTmdb";
import { useUrlFilters } from "hooks/useUrlFilters";
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

  const { filters, updateFilters, isInitialized } =
    useUrlFilters(defaultFilters);

  const { endpoint, queryParams } = useMovieEndpointParams(
    filters,
    isInitialized
  );

  const { data, loading, error, loadMore } = useTmdb(endpoint, queryParams);

  const { isInfiniteScrollEnabled, handleManualLoadMore } = useInfiniteScroll({
    data,
    loading,
    loadMore,
  });

  const handleFiltersChange = (newFilters) => {
    updateFilters(newFilters);
  };

  if (!isInitialized) return <LoadingProgressBar loading={true} />;

  return (
    <>
      <LoadingProgressBar loading={loading} />
      <PageWrapper>
        <FilterWrapper>
          <FilterHeader>Popular Movies</FilterHeader>
          <FilterSidebar
            onFiltersChange={handleFiltersChange}
            initialFilters={filters}
          />
        </FilterWrapper>

        <ContentArea>
          <MovieGrid movies={data?.results} error={error} />

          {data?.page < data?.total_pages && !isInfiniteScrollEnabled && (
            <LoadMoreButton $isActive={!loading} onClick={handleManualLoadMore}>
              Load More
            </LoadMoreButton>
          )}
        </ContentArea>
      </PageWrapper>
    </>
  );
}

export default PopularMovies;
