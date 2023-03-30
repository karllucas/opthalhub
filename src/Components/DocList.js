import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Pagination from './Pagination';
import Booking from './Booking';

export default function DocList({ user }) {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOpthal, setSelectedOpthal] = useState(null);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const offset = (pageNumber - 1) * 7;
    fetch(`http://localhost:3001/api/specialists/${offset}/7`, { cache: "no-store" })
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(data => {
        if (data.length > 0) {
          setData(data);
        }
      })
      .catch(error => console.log(error))
  };
  

  useEffect(() => {
    fetch(`http://localhost:3001/api/specialists/0/7`, { cache: "no-store" })
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, []);  // pass an empty array as a second argument to useEffect()

  function handleBooking(opthal) {
    setSelectedOpthal(opthal);
  }

  return (
    <div style={{ padding: '25px 85px' }}>
    <div>
        <h1 
          className='text-left'
          style={{ 
              margin: '85px 15px 50px'
          }}
        >
          Opthamologist Directory
        </h1>
    </div>
    <MDBTable 
        align='middle' 
        style={{ 
            margin: '50px 0',
            overflowX: 'hidden' 
        }}
    >
      <MDBTableHead>
        <tr style={{ textAlign: 'left' }}>
          <th 
            scope='col' 
            style={{ 
                textAlign: 'left',
            }}
            >
                Name
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Charge Per Hour
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Hospital
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Availability
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Actions
            </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      {data.map(opthal => {
        return (
          <tr key={opthal.id}>
          <td>
            <div className='d-flex align-items-start'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{opthal.name}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{opthal.charge_per_hour}</p>
          </td>
          <td>{opthal.hospital}</td>
          <td>
            {opthal.availability === 'available' ? (
              <MDBBadge color='success' pill>
                {opthal.availability}
              </MDBBadge>
            ) : (
              <MDBBadge color='danger' pill>
                {opthal.availability}
              </MDBBadge>
            )}
          </td>

          <td>
          <MDBBtn
            color='link'
            rounded
            size='sm'
            onClick={() => handleBooking(opthal)}
          >
            Book
          </MDBBtn>
          </td>
        </tr>
        );
      })}
      </MDBTableBody>
    </MDBTable>
    <Pagination
      itemsPerPage={7}
      totalItems={data.length}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
    <div
      style={{
        height: '50px'
      }}
    >
    </div>
    <Booking 
      handleBooking={handleBooking}
      selectedOpthal={selectedOpthal}
      user={user}
    />
    </div>
  );
}