import { useState } from "react";

export function useFilter(dataLists, callback) {
    const [query, setQuery] = useState('');
    const filteredData = dataLists?.filter((data) => (callback(data)?.toLowerCase().includes(query)))
    return [filteredData, setQuery]
}

