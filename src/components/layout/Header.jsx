import React from 'react'
import CurrencyChange from '../others/header/CurrencyChange'
import useFetch from '../../hooks/useFetch';
import { fetchFlags } from '../../api/apiService';

export default function Header() {
    const { data, error } = useFetch(fetchFlags);

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-4 shadow-md">
            <div className="w-3/4 mx-auto flex justify-end ">
                All advantages
                <CurrencyChange data={data} />
            </div>
        </div>
    )
}
