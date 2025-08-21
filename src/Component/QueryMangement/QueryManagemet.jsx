import React from "react";

const queryData = [
  {
    id: "21121",
    customer: "Vidit Puri",
    subject: "Flight Cancellation",
    agent: "Vansh Kaushik",
    date: "April 14, 2025 12:30 PM",
    status: "Open",
  },
  {
    id: "10110",
    customer: "Rahul Batra",
    subject: "Hotel Booking Issue",
    agent: "Naman Sharma",
    date: "April 20, 2025 12:30 PM",
    status: "In Progress",
  },
  {
    id: "13445",
    customer: "Shikhar Arora",
    subject: "Holiday Package Query",
    agent: "Unassigned",
    date: "April 22, 2025 12:30 PM",
    status: "Closed",
  },
  {
    id: "21121",
    customer: "Vidit Puri",
    subject: "Flight Cancellation",
    agent: "Vansh Kaushik",
    date: "April 14, 2025 12:30 PM",
    status: "Open",
  },
  {
    id: "10110",
    customer: "Rahul Batra",
    subject: "Hotel Booking Issue",
    agent: "Naman Sharma",
    date: "April 20, 2025 12:30 PM",
    status: "In Progress",
  },
  {
    id: "13445",
    customer: "Shikhar Arora",
    subject: "Holiday Package Query",
    agent: "Unassigned",
    date: "April 22, 2025 12:30 PM",
    status: "Closed",
  },
];

const statusColors = {
  Open: "bg-yellow-400 text-white",
  "In Progress": "bg-purple-600 text-white",
  Closed: "bg-red-600 text-white",
};

const QueryManagement = () => {
  return (
    <div className="min-h-screen bg-[#f7f7fb] p-6 font-sans">
      <h2 className="text-xl font-semibold mb-4 text-[#A3A3A3]">Query Management</h2>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left ">
          <thead className="bg-gray-100 border-b">
            <tr className="text-[#ACACAC]">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Assigned Agent</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {queryData.map((query, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 text-[#262626]">
                <td className="px-4 py-3">{query.id}</td>
                <td className="px-4 py-3">{query.customer}</td>
                <td className="px-4 py-3">{query.subject}</td>
                <td className="px-4 py-3">{query.agent}</td>
                <td className="px-4 py-3">{query.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[query.status]}`}
                  >
                    {query.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryManagement;
