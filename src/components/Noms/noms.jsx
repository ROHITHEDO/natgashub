import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux state

const Noms = () => {
  const username = useSelector((state) => state.auth.username); 
  
  return (
    <div>
      {username === 'Rohith' ? (
        <div>noms</div>
      ) : (
        <div>You do not have permission for this dataset</div>
      )}
    </div>
  );
};

export default Noms;
