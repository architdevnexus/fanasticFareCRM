import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import PriceSettings from "./PriceSetting";
import RoomAvailability from "./RoomAvailability";

export default function HotelExtranetTabs() {
  const tabdata = [
    {
      label: "Hotel Listing",
      data: [
        {
          hotelName: "Grand Palace",
          city: "Delhi",
          rating: 4,
          status: "Active",
          rooms: 2,
          priceStart: 3500,
        },
        {
          hotelName: "Sea Breeze Resort",
          city: "Goa",
          rating: 5,
          status: "Active",
          rooms: 1,
          priceStart: 5200,
        },
        {
          hotelName: "Skyline Inn",
          city: "Mumbai",
          rating: 3,
          status: "Inactive",
          rooms: 1,
          priceStart: 2800,
        },
      ],
    },
    {
      label: "Room Management",
      data: [
        {
          hotelName: "Orbit Suites",
          roomType: "Double",
          totalRooms: 40,
          availableRooms: 12,
          status: "Active",
        },
        {
          hotelName: "Ocean View",
          roomType: "Single",
          totalRooms: 30,
          availableRooms: 8,
          status: "Active",
        },
        {
          hotelName: "Mountain Lodge",
          roomType: "Suite",
          totalRooms: 15,
          availableRooms: 3,
          status: "Inactive",
        },
      ],
    },
    {
      label: "Pricing",
      data: [
        {
          hotelName: "Grand Palace",
          roomType: "Deluxe",
          basePrice: 4000,
          taxes: 400,
          totalPrice: 4400,
          status: "Active",
        },
        {
          hotelName: "Sea Breeze Resort",
          roomType: "Standard",
          basePrice: 5000,
          taxes: 500,
          totalPrice: 5500,
          status: "Active",
        },
        {
          hotelName: "Skyline Inn",
          roomType: "Economy",
          basePrice: 2500,
          taxes: 250,
          totalPrice: 2750,
          status: "Inactive",
        },
      ],
    },
    {
      label: "Availability & Booking",
      data: [
        {
          hotelName: "Orbit Suites",
          roomType: "Double",
          availableFrom: "2025-07-20",
          availableTo: "2025-08-15",
          booked: 18,
          status: "Open",
        },
        {
          hotelName: "Ocean View",
          roomType: "Suite",
          availableFrom: "2025-07-25",
          availableTo: "2025-08-20",
          booked: 25,
          status: "Open",
        },
        {
          hotelName: "Mountain Lodge",
          roomType: "Standard",
          availableFrom: "2025-07-10",
          availableTo: "2025-07-30",
          booked: 10,
          status: "Closed",
        },
      ],
    },
  ];

  const PricingTab = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-md">
        {/* Section 1 */}
        <div className="flex-1 border rounded-lg p-4 shadow-sm">
          <h2 className="text-[var(--primary-color)] text-lg font-semibold mb-4 text-center">
            Standard Pricing
          </h2>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Start Date
              </label>
              <input type="date" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                End Date
              </label>
              <input type="date" className="input-style" />
            </div>
          </div>

          {/* Price Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Base Price (Per Night)
              </label>
              <input type="number" placeholder="3200" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Max Occupancy
              </label>
              <input type="number" className="input-style" />
            </div>
          </div>

          {/* Extra and GST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Extra (Per Person)
              </label>
              <input type="number" placeholder="800" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                GST (%)
              </label>
              <input type="number" value={18} className="input-style" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex-1 border rounded-lg p-4 shadow-sm">
          <h2 className="text-[var(--primary-color)] text-lg font-semibold mb-4 text-center">
            Weekend Special Pricing
          </h2>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Start Date
              </label>
              <input type="date" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                End Date
              </label>
              <input type="date" className="input-style" />
            </div>
          </div>

          {/* Price Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Base Price (Per Night)
              </label>
              <input type="number" placeholder="4500" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Max Occupancy
              </label>
              <input type="number" className="input-style" />
            </div>
          </div>

          {/* Extra and GST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                Extra (Per Person)
              </label>
              <input type="number" placeholder="1000" className="input-style" />
            </div>
            <div className="flex flex-col">
              <label className="text-[var(--primary-color)] text-sm mb-1">
                GST (%)
              </label>
              <input type="number" value={18} className="input-style" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Optional: Tailwind utility shortcut class (add to global styles or tailwind.config.js)
  const style = `
.input-style {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)];
}
`;

  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = tabdata[activeTab].data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const renderTableHeaders = (data) => (
    <tr className="bg-gray-100 text-sm text-left">
      {Object.keys(data[0]).map((key) => (
        <th key={key} className="px-4 py-2 capitalize whitespace-nowrap">
          {key.replace(/([A-Z])/g, " $1")}
        </th>
      ))}
    </tr>
  );

  const renderTableRows = (data) =>
    data.map((item, idx) => (
      <tr key={idx} className="border-b hover:bg-gray-50 text-sm">
        {Object.entries(item).map(([key, val], i) => (
          <td key={i} className="px-4 py-2 whitespace-nowrap">
            {key === "rating" ? (
              <div className="flex text-yellow-500">
                {Array.from({ length: val }, (_, i) => (
                  <FaStar key={i} className="mr-0.5" />
                ))}
              </div>
            ) : (
              val
            )}
          </td>
        ))}
      </tr>
    ));

  return (
    <div className="flex bg-white shadow-md rounded-xl flex-col p-6 w-full">
      {/* Tab Headers */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 pb-2">
        {tabdata.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(idx);
              setSearchTerm("");
            }}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === idx
                ? "text-[var(--primary-color)] text-md border-b-2 font-bold border-[var(--primary-color)]"
                : "text-gray-500 hover:text-[var(--primary-color)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Button & Search — hide for Pricing and Availability & Booking tabs */}
      {tabdata[activeTab].label !== "Pricing" &&
        tabdata[activeTab].label !== "Availability & Booking" && (
          <div className="flex items-center justify-between mb-4 w-full">
            <button className="px-4 cursor-pointer py-2 text-sm bg-[var(--primary-color)] text-white rounded-md hover:opacity-90">
              + Add {tabdata[activeTab].label}
            </button>
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-gray-300 rounded-3xl overflow-hidden h-9">
                <input
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 h-full px-3 text-sm outline-none"
                />
                <div className="h-full px-3 flex items-center justify-center bg-[var(--primary-color)] text-white">
                  <FaSearch />
                </div>
              </div>
              <img
                src="/filter.svg"
                alt="Filter"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        )}

      <div className="w-full">
        {tabdata[activeTab].label === "Pricing" ? (
          <PriceSettings />
        ) : tabdata[activeTab].label === "Availability & Booking" ? (
          <RoomAvailability />
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                {filteredData.length > 0 && renderTableHeaders(filteredData)}
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  renderTableRows(filteredData)
                ) : (
                  <tr>
                    <td
                      colSpan="100%"
                      className="text-center py-4 text-gray-500 text-sm"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
