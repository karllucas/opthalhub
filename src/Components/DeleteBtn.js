import React from 'react';

function DeleteButton({ email }) {

  const handleClick = async () => {
    try {
      const response = await fetch(`http://localhost:3004/api/patients/${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      // Handle successful deletion
      console.log(`Patient with email ${email} has been deleted`);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>
      Delete Patient
    </button>
  );
}

export default DeleteButton;
