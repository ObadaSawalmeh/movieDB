import { useEffect, useState } from "react";
import { sortOptions } from "constants/filterConstants";

export function useMovieEndpointParams(filters, isInitialized) {
    const [endpoint, setEndpoint] = useState("/movie/popular");
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        if (!isInitialized) return;

        const { selectedGenres, searchKeyword, sortBy } = filters;

        let ep = "/movie/popular";
        let params = {};

        if (searchKeyword?.trim()) {
            ep = "/search/movie";
            params.query = searchKeyword.trim();
        } else if (selectedGenres.length > 0 || sortBy !== "popularityDescending") {
            ep = "/discover/movie";
            if (selectedGenres.length > 0) {
                params.with_genres = selectedGenres.join(",");
            }

            const selectedSort = sortOptions.find((opt) => opt.value === sortBy);
            params.sort_by = selectedSort?.tmdb || "popularity.desc";

            params.vote_count_gte = 50;
        }

        setEndpoint(ep);
        setQueryParams(params);
    }, [filters, isInitialized]);

    return { endpoint, queryParams };
}
