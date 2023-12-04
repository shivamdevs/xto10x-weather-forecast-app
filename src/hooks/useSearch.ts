import React, { useEffect, useState } from 'react'
import { SearchResult } from '../api'
import { useDebounce } from 'react-unique-hooks';
import searchLocal from '../api/search';

export type SearchHook = [
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    result: SearchResult | null,
    loading: boolean,
]

function useSearch(): SearchHook {
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<SearchResult | null>([]);
    useDebounce(() => {
        if (!query) return setLoading(false);
        searchLocal(query).then(res => {
            setResult(res);
        }).catch(() => {
            setResult(null);
        }).finally(() => {
            setLoading(false);
        });
    }, 500, [query]);

    useEffect(() => {
        if (query) setLoading(true);
    }, [query]);

    return [query, setQuery, result, loading];
}

export default useSearch