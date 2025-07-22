import React, { useState, useMemo } from "react";
import data from "../../DataStore/Markup.json";
import { LuNotebookPen } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function MarkupTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search input
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      [
        item.airline,
        item.route,
        item.userGroup,
        item.ruleId,
        item.class,
        item.markupType,
        item.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="w-full p-4 bg-white rounded-lg shadow-md">
      {/* Search bar */}
     <div className="flex justify-center w-full mb-4">
  <div className="flex items-center w-full max-w-2xl">
    {/* Search Icon */}
    <div className="flex items-center bg-[var(--primary-color)] text-white p-3 rounded-l-md cursor-pointer">
      <CiSearch size={20} />
    </div>

    {/* Input */}
    <input
      type="text"
      placeholder="Search by Airline, Route, User Group ..."
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
        <table className="min-w-full border-b border-collapse text-sm">
          <thead className="text-[var(--secondary-text-color)]  border-b-[1px]">
            <tr>
              <th className=" p-2 text-left">Rule ID</th>
              <th className=" p-2 text-left">Route</th>
              <th className=" p-2 text-left">Airline</th>
              <th className=" p-2 text-left">Class</th>
              <th className=" p-2 text-left">User Group</th>
              <th className=" p-2 text-left">Markup Type</th>
              <th className=" p-2 text-right">Value</th>
              <th className=" p-2 text-left">Status</th>
              <th className=" p-2 text-left">Action</th>

            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.ruleId}
                  className="hover:bg-gray-50 border-b"
                >
                  <td className=" p-2">{item.ruleId}</td>
                  <td className=" p-2">{item.route}</td>
                  <td className=" p-2">{item.airline}</td>
                  <td className=" p-2">{item.class}</td>
                  <td className=" p-2">{item.userGroup}</td>
                  <td className=" p-2 capitalize">
                    {item.markupType}
                  </td>
                  <td className=" p-2 text-right">
                    {item.markupType === "percentage"
                      ? `${item.value}%`
                      : `₹${item.value}`}
                  </td>
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
                <td
                  colSpan="8"
                  className="text-center p-4 text-gray-500 italic"
                >
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
