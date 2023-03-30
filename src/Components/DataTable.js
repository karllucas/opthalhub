import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function DataTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/specialists', { cache: "no-store" })
      .then(response => response.text()) // convert the response to a string
      .then(data => JSON.parse(data)) // parse the string data as JSON
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, []); // pass an empty array as a second argument to useEffect()

  return (
    <Table 
      striped
      style={{
        margin: '50px',
        border: '1px solid #cecece'
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Charge Per Hour</th>
          <th>Hospital Name</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {data.map(opthalmologist => (
        <tr key={opthalmologist.id}>
          <td>{opthalmologist.name}</td>
          <td>{opthalmologist.charge_per_hour}</td>
          <td>{opthalmologist.hospital}</td>
          <td>{opthalmologist.availability}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
