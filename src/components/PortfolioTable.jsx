import React, { useState } from "react";
import { FaFilter, FaTimes} from "react-icons/fa"; // Importing icons

const PortfolioTable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);

  const tabs = [
    "All", "Presarface", "NPA", "Response", "Symbolic Possession",
    "DM Order", "Physical Possessions", "Auctions"
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg relative">
      {/* Tabs Section */}
      <div className="flex overflow-x-auto border-b border-gray-300 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-medium whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="mt-4 flex items-center space-x-4 justify-between">
        {/* Search Input */}
        <div className="w-[60%]">
          <input
            type="text"
            placeholder="Search Loan Number"
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Select Columns Dropdown */}
        <div className="flex gap-6">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Columns</option>
            <option>Loan Number</option>
            <option>Customer Name</option>
            <option>Loan Amount</option>
          </select>

          {/* More Filters Button with Icon */}
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md flex items-center hover:bg-gray-300"
            onClick={() => setShowUploadForm(true)}
          >
            <FaFilter className="mr-2" /> More Filters
          </button>
        </div>
      </div>

      {/* Data Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md text-gray-600">
        <p>Displaying data for <span className="font-semibold text-blue-500">{activeTab}</span> category...</p>
      </div>

      {/* Upload Document Form */}
      {showUploadForm && (
          <div className="fixed top-12 right-0 h-full w-[30%] bg-white shadow-lg p-6 border-l border-gray-300 flex flex-col">
          {/* Close Button */}
          <button className="self-end text-gray-600 hover:text-red-500" onClick={() => setShowUploadForm(false)}>
            <FaTimes size={20} />
          </button>
          
          <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
          <label className="block text-gray-700">Document Name</label>
          <select className="w-full p-2 border rounded mb-3">
            <option>Select</option>
          </select>
          
          <label className="block text-gray-700">Document Type</label>
          <select className="w-full p-2 border rounded mb-3">
            <option>Select</option>
          </select>
          
          <label className="block text-gray-700">Document Remarks</label>
          <input type="text" className="w-full p-2 border rounded mb-3" placeholder="Type" />
          
          <label className="block text-gray-700">Select File</label>
          <input type="file" className="w-full p-2 border rounded mb-3" />
          
          <button className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer">Submit</button>
        </div>
        
      )}
    </div>
  );
};

export default PortfolioTable;
