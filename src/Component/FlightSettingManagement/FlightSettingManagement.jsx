import React from "react";

const airlines = [
  {
    id: 112,
    name: "IndiGo",
    code: "IND",
    country: "India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/IndiGo_Logo.svg",
  },
  {
    id: 113,
    name: "SpiceJet",
    code: "SIJ",
    country: "India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/SpiceJet_logo.svg",
  },
  {
    id: 114,
    name: "Air India",
    code: "ARI",
    country: "India",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
  },
];

export default function AirlineConfiguration() {
  return (
    <div className=" p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Airline Configuration</h2>
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800 transition">
          + New Airline
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Airlines</th>
              <th className="px-6 py-3">Code</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {airlines.map((airline) => (
              <tr key={airline.id} className="border-t">
                <td className="px-6 py-4">{airline.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={airline.logo}
                      alt={airline.name}
                      className="h-6 object-contain"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-black">{airline.code}</td>
                <td className="px-6 py-4">{airline.country}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
