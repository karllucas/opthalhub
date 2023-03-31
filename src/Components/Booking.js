import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Booking(props) {
  const { selectedOpthal, user } = props;
  const [hasSessionScheduled, setHasSessionScheduled] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [showCancelSessionButton, setShowCancelSessionButton] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(`http://localhost:3003/api/patients?patient_email=${user.email}`);
        const data = await response.json();
        setHasSessionScheduled(data.some(session => session.session_status === 'Scheduled'));
        if (data.length > 0 && data[0].session_status === 'Scheduled') {
          setIsScheduled(true, () => {
            setHasSessionScheduled(true);
          });
          setShowCancelSessionButton(true);
        } else {
          setIsScheduled(false);
        }
      } catch (error) {
        console.error(error);
        // handle any error messages accordingly
      }
    };
    fetchSessions();
  }, [user.email]);

  const handleCancelSession = async () => {
    try {
      const response = await fetch(`http://localhost:3004/api/patients/${user.email}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      setIsScheduled(false);
      setHasSessionScheduled(false);
      setShowCancelSessionButton(false);
      // handle any success or error messages accordingly
    } catch (error) {
      console.error(error);
      // handle any error messages accordingly
    }
  };

  const handleScheduleSession = async () => {
    if (hasSessionScheduled) {
      return;
    }
    try {
      const checkResponse = await fetch(`http://localhost:3003/api/patients?patient_email=${user.email}`);
      const checkData = await checkResponse.json();
      if (checkData.length > 0 && checkData[0].session_status === 'Scheduled') {
        return; // Exit the function if session is already scheduled
      }
      if (checkData.length === 0) {
        // User's email does not exist in the database, so we proceed with scheduling the session without sending an error message
        const response = await fetch('http://localhost:3002/api/patients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            opthal_name: selectedOpthal.name,
            charge_per_hour: selectedOpthal.charge_per_hour,
            hospital: selectedOpthal.hospital,
            patient_name: user.name,
            patient_email: user.email,
            session_status: 'Scheduled', // or any other default value preferred
          }),
        });
        const data = await response.json();
        console.log(data);
        setIsScheduled(true);
        setHasSessionScheduled(true); // set the state here
        setShowCancelSessionButton(true);
        // handle any success messages accordingly
      } else if (!isScheduled) {
        // User's email exists in the database, but session is not yet scheduled
        const response = await fetch('http://localhost:3002/api/patients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            opthal_name: selectedOpthal.name,
            charge_per_hour: selectedOpthal.charge_per_hour,
            hospital: selectedOpthal.hospital,
            patient_name: user.name,
            patient_email: user.email,
            session_status: 'Scheduled', // or any other default value preferred
          }),
        });
        const data = await response.json();
        console.log(data);
        setIsScheduled(true);
        setHasSessionScheduled(true); // set the state here
        setShowCancelSessionButton(true);
        // handle any success messages accordingly
      }
    } catch (error) {
      console.error(error);
      // handle any error messages accordingly
    }
  };    

  return (
    <div
      style={{
        border: '1px solid #cecece',
        borderRadius: '10px',
        padding: '85px 50px'
      }}
    >
      {selectedOpthal && (
        <div>
          <h2 style={{ marginBottom: '20px' }}>Booking Information</h2>{' '}
          <h3>Opthamologist</h3>
          <p><strong>Name:</strong> {selectedOpthal.name}</p>
          <p><strong>Charge Per Hour:</strong> {selectedOpthal.charge_per_hour}</p>
          <p><strong>Hospital:</strong> {selectedOpthal.hospital}</p>{' '}
          <br />
          <h3>Pateint</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>

          {hasSessionScheduled ? (
            <>
            <p style={{ color: '#b20000', marginBottom: '-5px' }}>You already have a session booked.<br /> 
              Cancel below to schedule another.</p>
            <MDBBtn 
              className='me-1' 
              color='danger'
              style={{
                marginTop: '15px'
              }}
              onClick={handleCancelSession}
            >
              Cancel Session
            </MDBBtn>
            </>
          ) : (
            <MDBBtn 
              className='me-1' 
              color='info'
              style={{
                marginTop: '15px'
              }}
              onClick={handleScheduleSession}
            >
              Schedule Session
            </MDBBtn>
          )}

        </div>
      )}
    </div>
  );
}
