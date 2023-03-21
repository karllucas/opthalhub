import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function DocList() {
  return (
    <div style={{ padding: '25px 85px' }}>
    <div className='text-center'>
        <h1 style={{ marginTop: '85px' }}>Directory</h1>
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
                Title
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Status
            </th>
            <th 
                scope='col'
                style={{ 
                    textAlign: 'left',
                }}
            >
                Position
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
        <tr>
          <td>
            <div className='d-flex align-items-start'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Book
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Book
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Book
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}