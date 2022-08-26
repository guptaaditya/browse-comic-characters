import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({page, onPageChange, totalPages}) => (
    <div className='pagination'>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            forcePage={(page-1)}
            onPageChange={onPageChange}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
        />
    </div>
);

export default Pagination;