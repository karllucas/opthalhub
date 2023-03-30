import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleLoadMore = () => {
    onPageChange(currentPage + 1);
  };

  // console.log('currentPage:', currentPage);
  // console.log('totalPages:', totalPages);

  return (
    <nav
      aria-label='Page navigation example'
      className='d-flex align-items-center justify-content-center'
      style={{
        cursor: 'pointer'
      }}
    >
      {totalPages > 0 && (
        <MDBPagination className='mb-0' >
          <MDBPaginationItem>
            <MDBPaginationLink onClick={handleLoadMore}>Load More</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      )}
    </nav>
  );
}
