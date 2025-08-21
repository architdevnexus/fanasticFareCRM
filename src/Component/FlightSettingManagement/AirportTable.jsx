import React from "react";
import { FaImage } from "react-icons/fa6";

const airports = [
  {
    id: 1,
    name: "Los Angeles International",
    code: "LAX",
    country: "United States",
    image: FaImage, // Replace with actual airport logo
  },
  {
    id: 2,
    name: "John F. Kennedy International",
    code: "JFK",
    country: "New York",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Heathrow Airport",
    code: "LHR",
    country: "London",
    image: "https://via.placeholder.com/40",
  },
];

export default function AirportTable() {
  return (
    <div className=" bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl text-gray-700">Airport Database Management</h1>
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800 transition">
          + New Airport
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-4">Airlines</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {airports.map((airport) => (
              <tr key={airport.id} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={airport.image}
                    alt="logo"
                    className="h-10 w-10 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{airport.name}</td>
                <td className="px-6 py-4 font-medium">{airport.code}</td>
                <td className="px-6 py-4">{airport.country}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
