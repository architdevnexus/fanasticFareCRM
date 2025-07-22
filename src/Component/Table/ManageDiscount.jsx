import React, { useState, useMemo } from "react";
import data from "../../DataStore/Discount.json";
import { CiSearch } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";
import { MdBlock } from "react-icons/md";

export default function ManageDiscount() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      [
        item.discountCode,
        item.airline,
        item.route,
        item.userType,
        item.status,
        item.type,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="w-full p-4 flex flex-col justify-center bg-white rounded-lg shadow-md">
      {/* Search bar */}
     <div className="flex justify-center mb-4 w-full">
  <div className="flex items-center w-full max-w-2xl">
    {/* Search Icon */}
    <div className="flex items-center bg-[var(--primary-color)] text-white p-3 rounded-l-md">
      <CiSearch size={20} />
    </div>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search by Code, Airline, Route, User Type ..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-grow p-2 border-t border-b border-r rounded-r-md outline-none"
    />

    {/* Filter Icon */}
    <img
      src="/filter.svg"
      alt="filter"
      className="cursor-pointer ml-4 w-6 h-6"
      title="Filter (not implemented)"
    />
  </div>
</div>


      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-b border-gray-300 text-sm">
          <thead className=" text-gray-700 border-b-[1px] border-gray-200">
            <tr>
              <th className=" p-2 text-left">Discount Code</th>
              <th className=" p-2 text-left">Airline</th>
              <th className=" p-2 text-left">Route</th>
              <th className=" p-2 text-left">User Type</th>
              <th className=" p-2 text-left">Type</th>
              <th className=" p-2 text-right">Value</th>
              <th className=" p-2 text-left">Valid Till</th>
              <th className=" p-2 text-left">Status</th>
              <th className=" p-2 text-left">Action</th>

            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className=" p-2">{item.discountCode}</td>
                  <td className=" p-2">{item.airline}</td>
                  <td className=" p-2">{item.route}</td>
                  <td className=" p-2">{item.userType}</td>
                  <td className=" p-2 capitalize">{item.type}</td>
                  <td className=" p-2 text-right">
                    {item.type === "percentage" ? `${item.value}%` : `₹${item.value}`}
                  </td>
                  <td className=" p-2">{item.validTill}</td>
                  <td className=" p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                                    <td className="flex items-center justify-center p-2 gap-2"> <LuNotebookPen className="cursor-pointer"/> <MdBlock className="cursor-pointer"/> </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500 italic">
                  No matching discounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
