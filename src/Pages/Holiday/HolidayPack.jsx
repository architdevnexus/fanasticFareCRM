import { useState } from "react";
import Dashnav from "../../Component/Dashnav";
import { FaSearch, FaPlus } from "react-icons/fa";
import NewPackage from "../../Component/Popup/NewPackage";
import HolidayPackCard from "../../Component/Cards/HolidayPackCard";
import holidayData from "../../DataStore/holidayPackage.json";
import LoopPackages from "../../Component/LoopPackages";

export default function HolidayPack() {
  const [showpack, setShowpac] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Domestic");

  const filteredData = holidayData.filter(
    ({ bookingId, name, packageName, type }) =>
      type === selectedType &&
      (bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        packageName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-[#FAFBFF] p-4 md:p-6 rounded-tl-4xl min-h-screen">
      <Dashnav />

      {/* Search and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-6">
        <div className="flex items-center border border-[var(--primary-color)] rounded-full px-3 w-full sm:w-96 bg-white">
          <input
            type="text"
            placeholder="Search by Booking ID, Guest Name, or Hotel Name"
            className="p-2 px-4 flex-grow rounded-full outline-none text-sm bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-[var(--primary-color)] text-white rounded-full p-2 hover:scale-110 transition">
          <FaSearch />
        </button>
        <img src="/filter.svg" alt="filter" className="w-8 cursor-pointer" />
        <img src="/sort.svg" alt="sort" className="w-8 cursor-pointer" />
      </div>

      {/* Create New Package Button */}
      <div className="flex items-center mt-5 justify-center w-full">
        <button
          onClick={() => setShowpac(true)}
          className="text-white rounded-lg bg-[var(--primary-color)] px-3 py-1 flex items-center gap-2 hover:scale-105 transition"
        >
          <FaPlus /> Create New Package
        </button>
      </div>

      {/* Package Type Toggle */}
      <section className="flex flex-col items-start">
        <h2 className="text-[var(--secondary-text-color)] text-lg font-semibold mt-8">
          Holidays Packages
        </h2>

        <div className="flex items-center justify-center w-full my-6">
          <div className="flex border border-gray-300 overflow-hidden rounded-md">
            {["Domestic", "International"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${selectedType === type
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-white text-gray-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Holiday Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {filteredData.length > 0 ? (
            filteredData.map((pack) => (
              <HolidayPackCard
                key={pack.bookingId}
                {...pack}
                onEdit={() => console.log("Edit", pack.bookingId)}
                onPrint={() => console.log("Print", pack.bookingId)}
                onViewBooking={() => console.log("View Booking", pack.bookingId)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No packages found.
            </p>
          )}
        </div>
      </section>

      {/* Activation Section */}

      {/* <section className="flex flex-col items-start mt-10">
        <h2 className="text-[var(--secondary-text-color)] text-lg font-semibold mb-4">
          Activate / Deactivate
        </h2>
        <LoopPackages />
      </section> */}


      {/* Popup for Creating Package */}
      {showpack && (
        <NewPackage setShowpac={setShowpac} onClose={() => setShowpac(false)} />
      )}
    </div>
  );
}
