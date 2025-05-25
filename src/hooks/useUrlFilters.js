import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useUrlFilters(defaultFilters = {}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isInitialized, setIsInitialized] = useState(false);

    // Parse filters from URL
    const parseFiltersFromUrl = useCallback(() => {
        const params = new URLSearchParams(location.search);

        const filters = {
            selectedGenres: [],
            searchKeyword: '',
            sortBy: 'popularityDescending',
            ...defaultFilters
        };

        // Parse genres (comma-separated numbers)
        const genresParam = params.get('genres');
        if (genresParam) {
            filters.selectedGenres = genresParam.split(',').map(Number).filter(Boolean);
        }

        // Parse search keyword
        const searchParam = params.get('search');
        if (searchParam) {
            filters.searchKeyword = decodeURIComponent(searchParam);
        }

        // Parse sort
        const sortParam = params.get('sort');
        if (sortParam) {
            filters.sortBy = sortParam;
        }

        return filters;
    }, [location.search, defaultFilters]);

    // Update URL with filters
    const updateUrlWithFilters = useCallback((filters) => {
        const params = new URLSearchParams();

        // Add genres to URL
        if (filters.selectedGenres && filters.selectedGenres.length > 0) {
            params.set('genres', filters.selectedGenres.join(','));
        }

        // Add search keyword to URL
        if (filters.searchKeyword && filters.searchKeyword.trim()) {
            params.set('search', encodeURIComponent(filters.searchKeyword.trim()));
        }

        // Add sort to URL (only if not default)
        if (filters.sortBy && filters.sortBy !== 'popularityDescending') {
            params.set('sort', filters.sortBy);
        }

        // Update URL without causing a page reload
        const newSearch = params.toString();
        const newUrl = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;

        navigate(newUrl, { replace: true });
    }, [navigate, location.pathname]);

    // Initialize filters from URL on mount
    const [filters, setFilters] = useState(() => parseFiltersFromUrl());

    useEffect(() => {
        if (!isInitialized) {
            const urlFilters = parseFiltersFromUrl();
            setFilters(urlFilters);
            setIsInitialized(true);
        }
    }, [parseFiltersFromUrl, isInitialized]);

    // Update filters and URL
    const updateFilters = useCallback((newFilters) => {
        setFilters(newFilters);
        updateUrlWithFilters(newFilters);
    }, [updateUrlWithFilters]);

    return {
        filters,
        updateFilters,
        isInitialized
    };
}