import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import Dashnav from "../../Component/Dashnav";
import hotelData from "../../DataStore/FlightData.json";
import Holiday from "../../DataStore/holidayPackage.json"
import HotelBookingCard from "../../Component/Cards/HotelBooking";
import ManageDiscount from "../../Component/Table/ManageDiscount";
import MarkupTable from "../../Component/Table/MarkupTable";
import PackageActivate from "../../Component/Cards/PackageActivate";


export default function HotelBooking() {
  const [searchTerm, setSearchTerm] = useState("");
 
  const [hotelType, setHotelType] = useState("Domestic"); // Default to Domestic
  const [selectedHotel, setSelectedHotel] = useState(null); // <-- added

  // Search + filter by hotelType
  const filteredBookings = hotelData.filter((booking) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      booking.bookingId.toLowerCase().includes(lowerSearch) ||
      booking.fullName.toLowerCase().includes(lowerSearch) ||
      booking.hotelName.toLowerCase().includes(lowerSearch);

    const matchesType = booking.hotelType === hotelType;
    return matchesSearch && matchesType;
  });

  const bookedHotels = filteredBookings.filter(
    (booking) => booking.hotelBookingStatus !== "Cancelled"
  );

  const cancelledHotels = filteredBookings.filter(
    (booking) => booking.hotelBookingStatus === "Cancelled"
  );

  // Handler to open popup with selected hotel data
  function handleCardClick(hotel) {
    setSelectedHotel(hotel);
    setShowpopup(true);
  }

  return (
    <div className="bg-[#FAFBFF] p-4 md:p-6 rounded-tl-4xl min-h-screen">
      <Dashnav />

      {/* Search and Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-6">
        <div className="flex items-center border border-[var(--primary-color)] rounded-full px-3 w-full sm:w-96 bg-white">
          <input
            type="text"
            placeholder="Search by Booking ID, Guest Name, or Hotel Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 px-4 flex-grow rounded-full outline-none text-sm bg-transparent"
          />
        </div>
        <button className="bg-[var(--primary-color)] text-white rounded-full p-2 hover:scale-110 transition">
          <FaSearch />
        </button>
        <img src="/filter.svg" alt="filter" className="w-8 cursor-pointer" />
        <img src="/sort.svg" alt="sort" className="w-8 cursor-pointer" />
      </div>

      {/* Type Filter (Domestic/International) */}
      <div className="flex justify-center my-6">
        <div className="flex">
          {["Domestic", "International"].map((type) => (
            <button
              key={type}
              onClick={() => setHotelType(type)}
              className={`px-4 py-1 cursor-pointer text-sm font-medium border transition-all duration-200 ${
                hotelType === type
                  ? "bg-[var(--primary-color)] text-white border-transparent"
                  : "bg-white text-[var(--primary-color)] border border-[var(--primary-color)]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Booked Hotels */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
          Booked Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedHotels.length > 0 ? (
            bookedHotels.map((booking, index) => (
              <div key={index} onClick={() => handleCardClick(booking)} className="cursor-pointer">
                <HotelBookingCard {...booking} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No booked hotels found.
            </p>
          )}
        </div>
      </section>

      {/* Cancelled Hotels */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
          Cancelled Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancelledHotels.length > 0 ? (
            cancelledHotels.map((booking, index) => (
              <div key={index}  className="cursor-pointer">
                <HotelBookingCard {...booking} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No cancelled hotels found.
            </p>
          )}
        </div>
      </section>

      {/* Manage Markups */}
      <section className="flex flex-col items-center mt-10 w-full gap-3">
        <div className="flex items-center w-full justify-between">
          <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
            Manage Markups
          </h2>
          <button className="flex items-center gap-3 p-2 text-white rounded-md px-3 cursor-pointer bg-[var(--primary-color)]">
            <FaPlus /> Add New Markups Rule
          </button>
        </div>
        <MarkupTable />
      </section>

      {/* Manage Discounts */}
      <section className="flex flex-col items-center mt-10 w-full gap-3">
        <div className="flex items-center w-full justify-between">
          <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
            Manage Discount
          </h2>
          <button className="flex items-center gap-3 p-2 text-white rounded-md px-3 cursor-pointer bg-[var(--primary-color)]">
            <FaPlus /> Add New Discounts
          </button>
        </div>
        <ManageDiscount />
      </section>

    
    </div>
  );
}
