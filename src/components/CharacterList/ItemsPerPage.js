import React from "react";
import Select from 'react-select';

const ItemsPerPage = ({value, onChange}) => {
    const options = [
        { value: 10, label: '10' },
        { value: 15, label: '15' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
    ];
    return (
        <div className='select-box'>
            <span className='label'>Items per page</span>
            <Select options={options} value={options.find((item) => item.value === value)} onChange={onChange} />
        </div>
    )    
};

export default ItemsPerPage;