import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const allReviews = [
  {
    name: "Vidit Puri",
    type: "Flight",
    rating: 5,
    review:
      "The booking process was seamless and customer support was quick to help when I had a query about baggage rules. Will book again!",
    date: "15/02/2025",
    status: "Approve",
  },
  {
    name: "Manisha Bhardwaj",
    type: "Hotel",
    rating: 5,
    review:
      "Hotel options were great and pricing was transparent. Would’ve loved faster confirmation, but overall a pleasant experience.",
    date: "6/03/2025",
    status: "Rejected",
  },
  {
    name: "Aditi Sharma",
    type: "Holidays Package",
    rating: 4,
    review:
      "Everything from flights to hotel transfers was well-managed. The itinerary was perfect. Kudos to the team!",
    date: "26/03/2025",
    status: "Approved",
  },
  {
    name: "Amanat",
    type: "Flight & Hotel",
    rating: 5,
    review:
      "Smooth booking process and received e-ticket instantly. Airline check-in was hassle-free. The customer care team was proactive in sharing flight updates. Will definitely book again!",
    date: "16/07/2025",
    status: "Rejected",
  },
];

const getStatusColor = (status) => {
  if (status === "Approve" || status === "Approved") return "text-green-600";
  if (status === "Rejected") return "text-red-600";
  return "text-gray-600";
};

const ReviewTable = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [starFilter, setStarFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = allReviews.filter((r) => {
    const matchesType = typeFilter === "All" || r.type === typeFilter;
    const matchesRating = starFilter === "" || r.rating === parseInt(starFilter);
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      r.name.toLowerCase().includes(search) ||
      r.type.toLowerCase().includes(search) ||
      r.review.toLowerCase().includes(search);
    return matchesType && matchesRating && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        {/* Type Filter */}
        <select
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>All</option>
          <option>Flight</option>
          <option>Hotel</option>
          <option>Holidays Package</option>
          <option>Flight & Hotel</option>
        </select>

        {/* Star Filter */}
        <select
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
          value={starFilter}
          onChange={(e) => setStarFilter(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by Customer Name, ID etc..."
            className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-gray-500">🔍</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-6 py-3 font-semibold text-sm">Customer Name</th>
              <th className="px-6 py-3 font-semibold text-sm">Booking Type</th>
              <th className="px-6 py-3 font-semibold text-sm">Rating</th>
              <th className="px-6 py-3 font-semibold text-sm">Review</th>
              <th className="px-6 py-3 font-semibold text-sm">Date</th>
              <th className="px-6 py-3 font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.length > 0 ? (
              filteredReviews.map((r, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{r.name}</td>
                  <td className="px-6 py-4">{r.type}</td>
                  <td className="px-6 py-4 flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </td>
                  <td className="px-6 py-4 max-w-xs">{`"${r.review}"`}</td>
                  <td className="px-6 py-4">{r.date}</td>
                  <td
                    className={`px-6 py-4 font-medium cursor-pointer ${getStatusColor(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No reviews found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
