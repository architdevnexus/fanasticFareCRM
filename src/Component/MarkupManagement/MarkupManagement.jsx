import React, { useState } from "react";
import CreateMarkupModal from "./CreateMarkupModal";

const initialMarkups = [
  {
    userType: "Agent",
    category: "Flight",
    application: "All Routes",
    markup: "10%",
    status: "ACTIVE",
  },
  {
    userType: "Customer",
    category: "Hotel",
    application: "Seaview Lodge",
    markup: "₹500",
    status: "ACTIVE",
  },
  {
    userType: "Customer",
    category: "Flight",
    application: "Route: DEL → BOM",
    markup: "₹1,200",
    status: "ACTIVE",
  },
  {
    userType: "Agent",
    category: "Holiday",
    application: "Package: Canada",
    markup: "20%",
    status: "INACTIVE",
  },
  {
    userType: "Agent",
    category: "Hotel",
    application: "All Routes",
    markup: "₹600",
    status: "ACTIVE",
  },
  {
    userType: "Customer",
    category: "Holiday",
    application: "Maldives Trip",
    markup: "15%",
    status: "INACTIVE",
  },
];

const rowsPerPage = 3;

const MarkupManagement = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [applicationFilter, setApplicationFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal


  const categories = ["All", ...new Set(initialMarkups.map((m) => m.category))];
  const applications = ["All", ...new Set(initialMarkups.map((m) => m.application))];
  const statuses = ["All", ...new Set(initialMarkups.map((m) => m.status))];

  const filteredMarkups = initialMarkups.filter((m) => {
    return (
      (categoryFilter === "All" || m.category === categoryFilter) &&
      (applicationFilter === "All" || m.application === applicationFilter) &&
      (statusFilter === "All" || m.status === statusFilter)
    );
  });

  const totalPages = Math.ceil(filteredMarkups.length / rowsPerPage);
  const paginatedData = filteredMarkups.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  const handleDotClick = (index) => setCurrentPage(index);
  <CreateMarkupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Markup Management</h2>
     <button
  onClick={() => setIsModalOpen(true)} // <- This opens the modal
  className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-800 text-sm transition"
>
  + Create Markup
</button>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
       
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setCurrentPage(0);
          }}
          className="w-full p-2 border border-gray-300 rounded hover:border-teal-500 transition"
        >
          {categories.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>

    

        <select
          value={applicationFilter}
          onChange={(e) => {
            setApplicationFilter(e.target.value);
            setCurrentPage(0);
          }}
          className="w-full p-2 border border-gray-300 rounded hover:border-teal-500 transition"
        >
           
          {applications.map((a, idx) => (
            <option key={idx} value={a}>
              {a}
            </option>
          ))}
        </select>

       

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(0);
          }}
          className="w-full p-2 border border-gray-300 rounded hover:border-teal-500 transition"
        >
          {statuses.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">User Type</th>
              <th className="p-4">Category</th>
              <th className="p-4">Application</th>
              <th className="p-4">Markup</th>
              <th className="p-4">Status</th>
              <th className="p-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-teal-50 transition border-b border-gray-100"
                >
                  <td className="p-4">{item.userType}</td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">{item.application}</td>
                  <td className="p-4">{item.markup}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-blue-600 hover:text-blue-800 cursor-pointer transition">
                    Edit &gt;
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No markups found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentPage === index ? "bg-teal-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MarkupManagement;
