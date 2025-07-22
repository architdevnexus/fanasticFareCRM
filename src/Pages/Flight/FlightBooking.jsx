import { useState } from "react";
import Dashnav from "../../Component/Dashnav";
import FlightTicketCard from "../../Component/Cards/FlightTicketCard";
import flightdata from "../../DataStore/FlightData.json";
import { FaSearch } from "react-icons/fa";
import { HiOutlineForward } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import MarkupTable from "../../Component/Table/MarkupTable";
import ManageDiscount from "../../Component/Table/ManageDiscount";

export default function FlightBooking() {
  const [selectedType, setSelectedType] = useState("Domestic");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter only booked flights (not cancelled)
  const bookedFlights = flightdata.filter((flight) => {
    const matchesType = flight.type === selectedType;
    const matchesSearch =
      flight.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (flight.pnr && flight.pnr.toLowerCase().includes(searchTerm.toLowerCase()));
    const isBooked = flight.status !== "Cancelled";
    return matchesType && matchesSearch && isBooked;
  });

  // Filter cancelled flights
  const cancelledFlights = flightdata.filter(
    (flight) => flight.type === selectedType && flight.status === "Cancelled"
  );

  return (
    <div className="bg-[#FAFBFF] p-4 md:p-6 rounded-tl-4xl min-h-screen">
      <Dashnav />

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-4">
        {/* Search Bar */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by PNR or Booking ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 px-4 w-full sm:w-96 border border-[var(--primary-color)] rounded-3xl outline-none text-sm"
          />
          <button className="bg-[var(--primary-color)] text-white w-10 h-10 grid place-items-center rounded-full hover:opacity-90">
            <FaSearch />
          </button>
        </div>

        {/* Sort / Filter Icons */}
        <div className="flex gap-2 items-center justify-end">
          <img src="/sort.svg" alt="sort" className="w-6 cursor-pointer" />
          <img src="/filter.svg" alt="filter" className="w-6 cursor-pointer" />
        </div>
      </div>

      {/* Flight Type Filter */}
      <div className="flex justify-center my-6">
        <div className="flex">
          {["Domestic", "International"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-1 cursor-pointer text-sm font-medium border transition-all duration-200 ${
                selectedType === type
                  ? "bg-[var(--primary-color)] text-white border-transparent"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Booked Flights Section */}
      <section>
        <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
          Booked Flights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedFlights.length > 0 ? (
            bookedFlights.map((flight, index) => (
              <FlightTicketCard
                key={flight.bookingId || index}
                logo={flight.companyLogo}
                from={flight.boardingAirport}
                to={flight.landingAirport}
                bookingId={flight.bookingId}
                name={flight.fullName}
                company_name={flight.flightCompany}
                seatClass={flight.seatClass}
                departureDate={flight.departureDate}
                arrivalDate={flight.arrivalDate}
                status={false}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No booked flights found.
            </p>
          )}
        </div>
      </section>

      {/* Cancelled Flights Section */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-[var(--secondary-text-color)]">
            Cancelled List
          </h3>
          <span className="text-[var(--primary-color)] flex items-center gap-1 text-sm font-medium cursor-pointer hover:underline">
            View All <HiOutlineForward className="text-base" />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancelledFlights.length > 0 ? (
            cancelledFlights.map((flight, index) => (
              <FlightTicketCard
                key={flight.bookingId || index}
                logo={flight.companyLogo}
                from={flight.boardingAirport}
                to={flight.landingAirport}
                bookingId={flight.bookingId}
                name={flight.fullName}
                company_name={flight.flightCompany}
                status={true}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No cancelled flights found.
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
        <button className="flex items-center gap-3 p-2 text-white rounded-md px-3 cursor-pointer bg-[var(--primary-color)]">  <FaPlus/> Add New Markups Rule </button>
        </div>
        <MarkupTable/>
      </section>

       {/* Manage Markups */}
      <section className="flex flex-col items-center mt-10 w-full gap-3">
        <div className="flex items-center w-full justify-between">
           <h2 className="text-xl font-semibold text-[var(--secondary-text-color)] mb-4">
         Manage Dicount
        </h2>
        <button className="flex items-center gap-3 p-2 text-white rounded-md px-3 cursor-pointer bg-[var(--primary-color)]">  <FaPlus/> Add New Discounts </button>
        </div>
        <ManageDiscount/>
      </section>
    </div>
  );
}
