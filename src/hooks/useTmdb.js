import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useTmdb(endpoint, queryParams = {}) {
    const [data, setData] = useState({ results: [], page: 1, total_pages: 1 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const prevEndpointRef = useRef(endpoint);
    const prevParamsRef = useRef(JSON.stringify(queryParams));

    const queryString = useMemo(() => {
        const params = {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            ...queryParams,
            page,
        };
        return new URLSearchParams(params).toString();
    }, [queryParams, page]);

    useEffect(() => {
        const endpointChanged = endpoint !== prevEndpointRef.current;
        const paramsChanged = JSON.stringify(queryParams) !== prevParamsRef.current;

        if (endpointChanged || paramsChanged) {
            setData({ results: [], page: 1, total_pages: 1 });
            setPage(1);
            setError(null);
            prevEndpointRef.current = endpoint;
            prevParamsRef.current = JSON.stringify(queryParams);
        }
    }, [endpoint, queryParams]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.themoviedb.org/3${endpoint}?${queryString}`);
                if (!response.ok) throw new Error('Failed to fetch');
                const json = await response.json();

                if (json.results) {
                    setData(prev => ({
                        ...json,
                        results: page === 1 ? json.results : [...prev.results, ...json.results],
                    }));
                } else {
                    setData(json);
                }

                setError(null);
            } catch (err) {
                console.error('TMDB API Error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, queryString, page]);

    const loadMore = useCallback(() => {
        setPage(prev => prev + 1);
    }, []);

    return { data, loading, error, loadMore };
}

export function useGenres() {
    const { data, loading, error } = useTmdb('/genre/movie/list');

    const genres = useMemo(() => {
        if (!data?.genres) return [];
        return data.genres.map((genre) => ({
            value: genre.id,
            label: genre.name,
        }));
    }, [data]);

    return { genres, loading, error };
}
