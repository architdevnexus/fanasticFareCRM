import { useState } from "react";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { MdPrint } from "react-icons/md";
import ConfirmTickets from "../Popup/ConfirmTickets";

export default function FlightTicketCard({
  logo,
  company_name,
  from,
  to,
  bookingId,
  name,
  departureDate,
  arrivalDate,
  seatClass,
  status = false,
}) {
  const [showConfirmTickets, setShowConfirmTickets] = useState(false);
  console.log(logo,
    company_name,
    from,
    to,
    bookingId,
    name,
    departureDate,
    arrivalDate,
    seatClass,)
  return (
    <>
      <div className="flex w-full text-gray-800 overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
        {/* Left Section */}
        <div className="flex flex-col gap-4 p-4 w-2/3">
          <img
            src={logo}
            alt={company_name}
            className="w-40 h-20 mb-2 object-contain"
          />

          {/* Route */}
          <div className="flex items-center gap-1 text-sm text-[var(--secondary-text-color)] font-semibold">
            <span>{from}</span>
            <div className="w-4 border-t border-dashed border-gray-400"></div>
            <PiAirplaneTakeoffLight className="text-3xl" />
            <div className="w-4 border-t border-dashed border-gray-400"></div>
            <span>{to}</span>
          </div>

          {/* Booking Info */}
          <div className="text-sm text-gray-600">
            <span className="font-medium">Booking ID:</span> {bookingId}
          </div>
        </div>

        {/* Dotted Divider */}
        <div className="relative">
          <div className="h-full w-[2px] border-l border-dashed border-gray-300"></div>
          <div className="absolute -left-[8px] top-0 w-4 h-4 bg-white rounded-br-full"></div>
          <div className="absolute -left-[8px] bottom-0 w-4 h-4 bg-white rounded-tr-full"></div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-around items-center p-4 w-1/3 text-center">
          <div className="flex flex-col items-center gap-2">
            <FaRegUserCircle className="text-3xl text-gray-500" />
            <span className="text-base font-semibold">{name}</span>
          </div>

          {/* Status Button or Action Panel */}
          {status ? (
            <button className="px-4 py-1 rounded-md text-sm bg-red-600 text-white font-medium shadow hover:bg-red-700 transition-colors">
              Cancelled
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowConfirmTickets(true)}
                className="px-1 py-1 text-xs border rounded-md text-gray-700 border-gray-400 cursor-pointer transition-colors"
              >
                View Status
              </button>

              <div className="flex justify-center items-center gap-4 text-xl text-gray-500 mt-2">
                <TbReportSearch className="cursor-pointer hover:text-[var(--primary-color)] transition-colors" />
                <LuNotebookPen className="cursor-pointer hover:text-[var(--primary-color)] transition-colors" />
                <MdPrint className="cursor-pointer hover:text-[var(--primary-color)] transition-colors" />
              </div>
            </>
          )}
        </div>
      </div>

     {showConfirmTickets && (
  <ConfirmTickets
    key={Date.now()}
    onClose={() => setShowConfirmTickets(false)}
    username={name}
    departure={
      departureDate && !isNaN(new Date(departureDate))
        ? new Date(departureDate).toLocaleString()
        : "Invalid Date"
    }
    arrival={
      arrivalDate && !isNaN(new Date(arrivalDate))
        ? new Date(arrivalDate).toLocaleString()
        : "Invalid Date"
    }
    airline={company_name}
    seat={seatClass}
    pnr={bookingId}
    logo={logo}
  />
)}


    </>
  );
}
