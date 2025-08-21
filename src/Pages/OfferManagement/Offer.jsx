import React, { useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const offers = [
  {
    name: "Family Package Deal",
    type: "Last Minute Deal",
    category: "Flight",
    period: "15 May 2025 - 15 June 2025",
    status: "ACTIVE",
  },
  {
    name: "Early Bird Discount",
    type: "Early Bird Offer",
    category: "Hotel",
    period: "5 June 2025 - 5 July 2025",
    status: "ACTIVE",
  },
  {
    name: "Early Bird Discount",
    type: "Early Bird Offer",
    category: "Hotel",
    period: "5 June 2025 - 5 July 2025",
    status: "ACTIVE",
  },
  {
    name: "Family Package Deal",
    type: "Last Minute Deal",
    category: "Flight",
    period: "15 May 2025 - 15 June 2025",
    status: "ACTIVE",
  },
  {
    name: "Family Package Deal",
    type: "Last Minute Deal",
    category: "Flight",
    period: "15 May 2025 - 15 June 2025",
    status: "ACTIVE",
  },
];

const Offer = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <div className="p-10 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#A3A3A3]">Offer Management</h2>
        <button className="flex items-center bg-[#1E4557] text-white px-4 py-2 rounded hover:bg-blue-700">
          <FaPlus className="mr-2" />
          Create New Offer
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-4 mb-4 p-6">
        <select className="p-2 border rounded bg-white">
            
          <option>All Categories</option>
        </select>
        <select className="p-2 border rounded bg-white">
          <option>All Types</option>
        </select>
        <select className="p-2 border rounded bg-white">
          <option>All Status</option>
        </select>
      </div>

      {/* Info Alert */}
      <div className="bg-yellow-100 text-[#8A8A8A] p-3 rounded flex items-center mb-4 w-[50%]  justify-center place-self-center ">
        <BsInfoCircle className="mr-2 " />
        4 special offers are currently live on the website.
      </div>

      {/* Offer Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto m-6">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Period</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{offer.name}</td>
                <td className="px-4 py-3">{offer.type}</td>
                <td className="px-4 py-3">{offer.category}</td>
                <td className="px-4 py-3">{offer.period}</td>
                <td className="px-4 py-3">
                  <span className="text-white font-semibold bg-[#4AE872] px-2 py-1 rounded-xs text-xs">
                    {offer.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-blue-600 cursor-pointer hover:underline">
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center my-6 space-x-2">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        {/* Set Priority */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="mb-3 font-semibold">Set Offer Priority</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>Last Minute Deal</option>
              <option>Early Bird Offer</option>
            </select>
           <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>Last Minute Deal</option>
              <option>Early Bird Offer</option>
            </select>
            <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Flight</option>
              <option>Hotel</option>
            </select>
          <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>Last Minute Deal</option>
              <option>Early Bird Offer</option>
            </select>
          </div>
          <button className="bg-[#1E4557] text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="mb-3 font-semibold flex justify-between items-center">
            Track Offer Performance
            <span className="text-green-600 text-sm">↑ 1.1% Increase</span>
          </h3>
          <div className="h-40 flex items-center justify-center text-gray-400">
            <p>[Chart Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
