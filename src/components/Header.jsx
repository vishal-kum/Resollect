import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white p-2 shadow flex justify-between items-center fixed z-10">
      {/* Logo */}
      <h1 className="p-5 text-lg sm:text-3xl font-bold text-blue-700">Resollect</h1>

      {/* User Profile Section */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-3 focus:outline-none"
        >
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Random profile image
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div className="text-gray-700 text-left">
            <span className="font-extrabold text-base sm:text-lg">Tushar</span>
            <p className="text-sm sm:text-base text-gray-900">tushar@resollect.com</p>
          </div>
          <FaChevronDown className="text-gray-600 ml-2" /> {/* Dropdown icon */}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
            <ul className="text-gray-700">
              <li className="px-4 py-2 text-sm sm:text-base hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 text-sm sm:text-base hover:bg-gray-100 cursor-pointer border-t">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
