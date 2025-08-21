import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FiExternalLink } from "react-icons/fi";

const RoomAvailability = () => {
  const bookings = [
    { date: "16/05/2025", booked: 8, remaining: 12, price: "₹3,500" },
    { date: "17/05/2025", booked: 4, remaining: 16, price: "₹4,500" },
    { date: "17/05/2025", booked: 3, remaining: 6, price: "₹4,200" },
    { date: "20/05/2025", booked: 5, remaining: 12, price: "₹7,500" },
    { date: "21/05/2025", booked: 4, remaining: 8, price: "₹3,800" },
  ];

  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const formattedRange = `${format(
    dateRange[0].startDate,
    "dd/MM/yyyy"
  )} - ${format(dateRange[0].endDate, "dd/MM/yyyy")}`;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Room Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">Room Type</label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2">
            <option>Deluxe Room</option>
            <option>Standard Room</option>
          </select>
        </div>

        {/* Date Range Picker */}
        <div className="relative">
          <label className="block text-sm font-semibold mb-1">Date Range</label>
          <div
            className="flex items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer"
            onClick={() => setShowPicker(!showPicker)}
          >
            <span className="mr-2">📅</span>
            <input
              type="text"
              value={formattedRange}
              className="w-full outline-none bg-transparent cursor-pointer"
              readOnly
            />
          </div>
          {showPicker && (
            <div className="absolute z-10 mt-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Total Rooms */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Total Rooms Available
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={20}
          />
        </div>
      </div>

      {/* Room Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Booked Rooms
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={8}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Remaining Rooms
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={12}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Minimum Stay
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={2}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Maximum Stay
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={5}
          />
        </div>
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[var(--primary-color)] text-white">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Booked</th>
              <th className="py-3 px-4 text-left">Remaining</th>
              <th className="py-3 px-4 text-left">Price Per Night</th>
              <th className="py-3 px-4 text-left"> </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{booking.date}</td>
                <td className="py-2 px-4">{booking.booked}</td>
                <td className="py-2 px-4">{booking.remaining}</td>
                <td className="py-2 px-4">{booking.price}</td>
                <td className="py-2 px-4 text-[var(--primary-color)] font-medium flex items-center gap-1 cursor-pointer">
                  View Booking <FiExternalLink />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomAvailability;
