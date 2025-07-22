import { MdOutlineEditNote } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";

export default function HolidayPackCard({
  bookingId,
  name,
  packageName,
  startDate,
  endDate,
  durationDays,
  durationNights,
  price,
  status,
  imageUrl,
  onEdit,
  onPrint,
  onViewBooking,
}) {
  return (
    <div className="flex flex-col gap-5 p-4 max-w-xs rounded-lg shadow-xl">
      {/* Image section */}
      <div className="relative">
        <img
          className="rounded-lg h-36 w-full object-cover"
          src={imageUrl}
          alt={`${packageName} image`}
        />

        {/* Duration badge */}
        <div className="absolute text-xs bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white bg-opacity-90 shadow-lg px-4 rounded-md text-[var(--primary-color)]">
          <span className="flex items-center gap-1">{durationDays} Days</span>
          <span className="h-3 border-l border-[var(--primary-color)]"></span>
          <span className="flex items-center">{durationNights} Nights</span>
        </div>
      </div>

      {/* Booking Details */}
      <div className="flex flex-col gap-1 text-[var(--secondary-text-color)] font-medium">
        <span>
          Booking ID: <span className="font-bold text-black">{bookingId}</span>
        </span>
        <span>
          Name: <span className="font-bold text-black">{name}</span>
        </span>
        <span>
          Package Name: <span className="font-bold text-black">{packageName}</span>
        </span>
        <span>
          Start Date: <span className="font-bold text-black">{startDate}</span>
        </span>
        <span>
          End Date: <span className="font-bold text-black">{endDate}</span>
        </span>
      </div>

      {/* Status and Actions */}
      <div className="flex items-center justify-between">
        <button
          className={`px-6 py-1 rounded-lg font-semibold text-white ${
            status.toLowerCase() === "active"
              ? "bg-[var(--green-text-color)]"
              : "bg-gray-400 cursor-default"
          }`}
          disabled={status.toLowerCase() !== "active"}
        >
          {status.toUpperCase()}
        </button>
        <div className="flex items-center gap-4 text-[var(--primary-color)] text-2xl cursor-pointer">
          <MdOutlineEditNote onClick={onEdit} />
          <FaPrint onClick={onPrint} />
        </div>
      </div>

      <hr />

      {/* Pricing and View Booking */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start font-semibold text-lg">
          <span>Price</span>
          <span className="text-[var(--primary-color)]">${price.toLocaleString()}</span>
        </div>
        <button
          onClick={onViewBooking}
          className="bg-black text-white px-4 py-1 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          View Booking
        </button>
      </div>
    </div>
  );
}
