import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">Receipt Analyzer</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/upload" className="hover:text-blue-500">Upload</Link>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
