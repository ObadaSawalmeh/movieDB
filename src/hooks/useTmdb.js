import { useEffect, useState } from 'react';
export function useTmdb(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = import.meta.env.VITE_TMDB_API_KEY;
                const response = await fetch(
                    `https://api.themoviedb.org/3${endpoint}?api_key=${apiKey}`
                );

                if (!response.ok) throw new Error('Failed to fetch');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}