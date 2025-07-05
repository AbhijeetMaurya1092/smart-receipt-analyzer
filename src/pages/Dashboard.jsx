import React from 'react';
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spending Overview</h1>
      <Chart />
    </div>
  );
};

export default Dashboard;
