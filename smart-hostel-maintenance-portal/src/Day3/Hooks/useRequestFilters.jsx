import React from 'react'

export default function useRequestFilters(requests) {
    const [filters, setFilters] = React.useState({
        search: '', 
        category: '', 
        status: '',
        priority: '',
        sortBy: 'latest'});

    const filteredRequests = React.useMemo(() => {

    let processedRequests = [...requests]

    if (filters.search.trim() !== '') {
        processedRequests = processedRequests.filter(req => req.title.toLowerCase().includes(filters.search.toLowerCase()))
    }

    if (filters.category.trim() !== '') {
        processedRequests = processedRequests.filter(req => req.category.toLowerCase() === filters.category.toLowerCase())
    }

    if (filters.status.trim() !== '') {
        processedRequests = processedRequests.filter(req => req.status.toLowerCase() === filters.status.toLowerCase())
    }

    if (filters.priority.trim() !== '') {
        processedRequests = processedRequests.filter(req => req.priority.toLowerCase() === filters.priority.toLowerCase())
    }

    processedRequests.sort((a, b) => {
        if (filters.sortBy === 'latest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (filters.sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
        if (filters.sortBy === 'alphabetical') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    return processedRequests;

    }, [requests, filters]);

    return {filters, setFilters, filteredRequests};
}
