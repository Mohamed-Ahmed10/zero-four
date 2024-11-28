import React from 'react'
import CurrencyChange from '../data/CurrencyChange'
import useFetch from '../../hooks/useFetch';
import { fetchFlags } from '../../api/apiService';

export default function Header() {
    const { data, error } = useFetch(fetchFlags);

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex justify-end p-4 shadow-md">
            All advantages
            <CurrencyChange data={data} />
        </div>
    )
}
