import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaBell,
  FaFileAlt,
  FaGavel,
  FaUpload,
  FaCogs,
  FaUsers,
  FaKey,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-1/5  p-4 shadow-lg flex flex-col justify-between relative">
      <ul className="space-y-8 sm:space-y-2 overflow-y-auto flex-grow">

        <li>
          <Link
            to="/dashboard"
            className={`flex items-center p-2 rounded-md ${
              isActive("/dashboard")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`flex items-center p-2 rounded-md ${
              isActive("/")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaHome className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className={`flex items-center p-2 rounded-md ${
              isActive("/notifications")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaBell className="mr-2" /> Notifications
          </Link>
        </li>
        <li>
          <Link
            to="/notices"
            className={`flex items-center p-2 rounded-md ${
              isActive("/notices")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaFileAlt className="mr-2" /> Notices
          </Link>
        </li>
        <li>
          <Link
            to="/auction"
            className={`flex items-center p-2 rounded-md ${
              isActive("/auction")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaGavel className="mr-2" /> Auction
          </Link>
        </li>
        <li>
          <Link
            to="/data-upload"
            className={`flex items-center p-2 rounded-md ${
              isActive("/data-upload")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaUpload className="mr-2" /> Data Upload
          </Link>
        </li>
        <li>
          <Link
            to="/control-panel"
            className={`flex items-center p-2 rounded-md ${
              isActive("/control-panel")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaCogs className="mr-2" /> Control Panel
          </Link>
        </li>
        <li>
          <Link
            to="/user-management"
            className={`flex items-center p-2 rounded-md ${
              isActive("/user-management")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaUsers className="mr-2" /> User Management
          </Link>
        </li>
        <li>
          <Link
            to="/permissions"
            className={`flex items-center p-2 rounded-md ${
              isActive("/permissions")
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            <FaKey className="mr-2" /> Permissions
          </Link>
        </li>
      </ul>
      <div className="text-gray-600 p-2 fixed bottom-4 left-4">
        Powered by <span className="text-blue-700 font-bold">Resollect</span>
      </div>
    </div>
  );
};

export default Sidebar;                                                              