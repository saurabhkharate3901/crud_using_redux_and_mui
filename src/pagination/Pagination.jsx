import React from 'react';
import Pagination from '@mui/material/Pagination';

function CustomPagination({ count, page, onPageChange, rowsPerPage, onRowsPerPageChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <label>
        Rows per page :
        <select value={rowsPerPage} onChange={onRowsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </label>

      <Pagination
        count={count}         
        page={page}             
        onChange={onPageChange} 
        color="primary"
      />
    </div>
  );
}

export default CustomPagination;