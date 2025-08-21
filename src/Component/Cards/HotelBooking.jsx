import { useState } from "react";
import { MdOutlineEditNote, MdOutlineImageSearch } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FaPrint } from "react-icons/fa6";
import HotelStatus from "../Popup/HotelStatus";
import HotelPayment from "../Popup/HotelPayment";

export default function HotelBooking({
  bookingId,
  fullName,
  hotelName,
  hotelImage,
  hotelBookingStatus,
  paymentMethod,
  hotelType,
}) {
  // State to track which popup to show: null | "hotel" | "payment"
  const [popupType, setPopupType] = useState(null);

  const hotelData = {
    bookingId,
    fullName,
    hotelName,
    hotelImage,
    hotelBookingStatus,
    paymentMethod,
    hotelType,
  };

  const paymentData = {
    bookingId,
    fullName,
    hotelName,
    paymentMethod,
    hotelImage
    // You can add more payment-specific fields if you have
  };

  return (
    <div className="bg-white p-2 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-2 w-full ">
      <img
        src={hotelImage}
        alt={hotelName}
        className="w-1/3 h-40 object-cover rounded-lg"
      />

      <div className="flex flex-col gap-2 text-sm w-full">
        <span>
          <strong>Booking ID:</strong> {bookingId}
        </span>
        <span>
          <strong>Guest Name:</strong> {fullName}
        </span>
        <span>
          <strong>Hotel Name:</strong> {hotelName}
        </span>

        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setPopupType("hotel")}
            className={`px-2 cursor-pointer py-1 border border-gray-300 rounded-full text-sm transition ${
              hotelBookingStatus === "Cancelled"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {hotelBookingStatus}
          </button>
          <button
            onClick={() => setPopupType("payment")}
            className="px-2 cursor-pointer py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
          >
            {paymentMethod}
          </button>
        </div>

        <div className="flex items-center gap-4 text-[var(--primary-color)] text-lg h-[28px] ">
          <MdOutlineImageSearch className="cursor-pointer hover:scale-110 transition h-[28px]" />
          <MdOutlineEditNote className="cursor-pointer hover:scale-110 transition h-[28px]" />
          <FaPrint className="cursor-pointer hover:scale-110 transition h-[28px]" />
        </div>
      </div>

      {/* Conditionally show hotel or payment popup */}
      {popupType === "hotel" && (
        <HotelStatus hotelData={hotelData} onClose={() => setPopupType(null)} />
      )}
      {popupType === "payment" && (
        <HotelPayment paymentData={paymentData} onClose={() => setPopupType(null)} />
      )}
    </div>
  );
}
