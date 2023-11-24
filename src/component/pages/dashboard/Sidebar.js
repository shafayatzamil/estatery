import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-yellow-800  text-white h-screen w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/allproperty"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            All property
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/allusers"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            All Users
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            this is mainDashboard
          </Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
