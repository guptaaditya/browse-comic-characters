import Select from 'react-select';
import React from 'react';

const Sort = ({value, onChange}) => {
    const options = [
        { value: 'name', label: 'Alphabetical (A - Z)' },
        { value: '-name', label: 'Alphabetical (Z - A)' },
        { value: 'modified', label: 'Newest first' },
        { value: '-modified', label: 'Oldest first' },
    ];
    return (
        <div className='sort-box select-box'>
            <span className='label'>Sort by</span>
            <Select options={options} value={options.find((item) => item.value === value)} onChange={onChange} />
        </div>
    )
};

export default Sort;