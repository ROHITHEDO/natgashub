import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Noms = () => {
  const username = useSelector((state) => state.auth.username);
  const [data, setData] = useState([]); // State to hold API data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    if (username === 'Rohith') {
      // Only fetch data if the user has permission
      axios
        .get('https://jsonplaceholder.typicode.com/posts') // Fake API endpoint
        .then((response) => {
          setData(response.data); // Set the data from the API response
          setLoading(false); // Set loading to false once data is received
        })
        .catch((err) => {
          setError('Failed to fetch data');
          setLoading(false);
        });
    }
  }, [username]); // The effect will run whenever `username` changes

  if (username !== 'Rohith') {
    return <div>You do not have permission for this dataset</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Nominations Data</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Noms;
