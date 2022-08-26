import React, { useCallback, useState } from "react";
import Select from 'react-select';

const Filter = ({onFilterApplied}) => {
    const [filterKey, setFilterKey] = useState('nameStartsWith');
    const [filterValue, setFilterValue] = useState('');
    const options = [
        { value: 'name', label: 'Exact name' },
        { value: 'nameStartsWith', label: 'Name starting with' },
    ];
    const handleFilterKeyChange = useCallback(({value}) => {
        setFilterKey(value);
    }, []);
    const handleFilterValueChange = useCallback(e => {
        setFilterValue(e.target.value);
    }, []);
    const handleApplyFilter = useCallback(() => {
        onFilterApplied({ [filterKey]: filterValue });
    }, [onFilterApplied, filterKey, filterValue]);

    const handleClearFilter = useCallback(() => {
        onFilterApplied({});
        setFilterValue('');
    }, [onFilterApplied]);

    return (
        <div className='filter-box'>
            <div className='select-box'>
                <span className='label'>Filter by</span>
                <Select options={options} value={options.find((item) => item.value === filterKey)} onChange={handleFilterKeyChange} />
            </div>
            <div className='filter-input'>
                <input type="text" value={filterValue} onChange={handleFilterValueChange} />
            </div>
            <div className='filter-apply'>
                <button type="button" onClick={handleApplyFilter}>Apply</button>
            </div>
            <div className='filter-apply'>
                <button type="button" onClick={handleClearFilter}>Clear</button>
            </div>
        </div>
    );
};

export default Filter;