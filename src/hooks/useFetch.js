import { useState, useEffect } from 'react';

const useFetch = (fetchFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlags = async () => {
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlags();
    }, [fetchFunction]);

    return { data, loading, error };
};

export default useFetch;