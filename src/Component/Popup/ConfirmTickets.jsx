import { FaPrint } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

export default function ConfirmTickets({
  onClose,
  airline,
  username,
  arrival,
  departure,
  seat,
  pnr,
  logo, // airline logo URL
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white rounded-2xl shadow-2xl w-[90%] max-w-lg animate-scaleUp relative p-6"
      >
        {/* Close Button */}
        <button
          className="absolute cursor-pointer top-3 right-3 text-3xl text-gray-400 hover:text-red-600 transition"
          onClick={onClose}
        >
          <IoClose />
        </button>

        {/* Airline Logo */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={logo || "https://www.pngmart.com/files/16/Airplane-PNG-Clipart.png"}
            alt="Airline Logo"
            className="w-40 p-2 h-24 object-contain rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
          />
        </div>

        {/* Confirmation Text */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-2xl font-bold text-green-600">Ticket Confirmed!</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm px-4">
            Your booking has been successfully confirmed and issued by{" "}
            <strong>{airline}</strong>.
          </p>

          {/* Ticket Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-4 w-full">
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">Passenger:</span>
              <span>{username}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">Airline:</span>
              <span>{airline}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">PNR No:</span>
              <span>{pnr}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">Seat Class:</span>
              <span>{seat}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">Departure:</span>
              <span>{departure}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[var(--primary-color)]">Arrival:</span>
              <span>{arrival}</span>
            </div>
          </div>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="mt-6 cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-full text-sm shadow"
          >
            <FaPrint />
            Print Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
