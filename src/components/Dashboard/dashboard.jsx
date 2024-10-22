// components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Dashboard;
