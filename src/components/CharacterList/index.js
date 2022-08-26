import React, { useState, useCallback } from 'react';
import { useCharactersList, DEFAULT_LIMIT } from 'datahooks';

import CharacterCard from './CharacterCard';
import Filter from './Filter';
import ItemsPerPage from './ItemsPerPage';
import Pagination from './Pagination';
import Sort from './Sort';
import './characterlist.scss';

/**
    * Implements Pagination, ItemsPerPage, filter and sort
    * Implements list of characters in form of cards where each card shows name of the character along with
        the thumbnail image. Since the UI or any dimension is not specified in the instructions for listing page that has been chosen
        to display the data effectively for most screen sizes 
    * Loading state has been implemented but only with a text
*/
export default function CharacterList() {
    const [filter, setFilter] = useState({});
    const [sort, setSortBy] = useState('name');
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const [page, setPage] = useState(1);

    const offset = Number((page - 1) * limit);

    const { loading = false, total = 0, results = [] } = useCharactersList({
        filter, 
        sort, 
        limit, 
        offset,
    });

    const totalPages = Math.floor(total/limit);
    
    const handlePageSelect = useCallback((event) => {
        setPage(event.selected+1);
    }, []);
    const handleItemsPerPageChange = useCallback(({value}) => {
        setLimit(value);
        setPage(1)
    }, []);
    const handleSortChange = useCallback(({value}) => {
        setSortBy(value);
        setPage(1);
    }, []);
    const handleFilterChange = useCallback(newFilter => {
        setPage(1);
        setFilter(newFilter);
    }, []);

    return (
        <div className='container'>
            <h1>Marvel Characters</h1>
            <div className='toolbar'>
                <Filter 
                    onFilterApplied={handleFilterChange}
                />
                <Sort value={sort} onChange={handleSortChange} />
                <ItemsPerPage value={limit} onChange={handleItemsPerPageChange} />
            </div>
            <div>
                {loading && `Loading results...`}
                {!loading && total > 0 && <>Showing {(offset + 1)} to {Math.min((page * limit), total)} of {total}</>}
                {!loading && total === 0 && `No records found`}
            </div>
            <div className='character-list'>
                {results.map(({name, id, thumbnail: { path, extension }}) => (
                    <CharacterCard 
                        key={id} 
                        id={id} 
                        name={name} 
                        thumbnail={`${path}.${extension}`} 
                    />
                ))}
            </div>
            <Pagination onPageChange={handlePageSelect} page={page} totalPages={totalPages} />
        </div>
    );
}