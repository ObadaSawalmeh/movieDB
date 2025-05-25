// utils/filterUtils.js
// Optional utility functions for more complex filtering logic

export const buildTmdbEndpoint = (filters) => {
    const { selectedGenres, searchKeyword, sortBy } = filters;

    // Search takes priority over other filters
    if (searchKeyword?.trim()) {
        return {
            endpoint: "/search/movie",
            params: {
                query: searchKeyword.trim()
            }
        };
    }

    // Use discover for advanced filtering
    if (selectedGenres?.length > 0 || (sortBy && sortBy !== "popularity.desc")) {
        const params = {};

        if (selectedGenres?.length > 0) {
            params.with_genres = selectedGenres.join(',');
        }

        if (sortBy) {
            params.sort_by = mapSortValue(sortBy);
        }

        // Add quality filters for better results
        params.vote_count_gte = 50;
        params.include_adult = false;

        return {
            endpoint: "/discover/movie",
            params
        };
    }

    // Default to popular movies
    return {
        endpoint: "/movie/popular",
        params: {}
    };
};

export const mapSortValue = (sortBy) => {
    const sortMapping = {
        "popularityDescending": "popularity.desc",
        "popularityAscending": "popularity.asc",
        "releaseDateDescending": "release_date.desc",
        "releaseDateAscending": "release_date.asc",
        "ratingDescending": "vote_average.desc",
        "ratingAscending": "vote_average.asc",
        "voteCountDescending": "vote_count.desc",
        "voteCountAscending": "vote_count.asc",
        "titleAscending": "title.asc",
        "titleDescending": "title.desc"
    };

    return sortMapping[sortBy] || "popularity.desc";
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};