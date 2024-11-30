import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await fetchFunction();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (dependencies.every(dep => dep !== null && dep !== undefined)) {
            fetchData();
        }
    }, dependencies);

    return { data, loading, error };
};

export default useFetch;
