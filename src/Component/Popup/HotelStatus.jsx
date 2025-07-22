import { useEffect, useRef } from "react";

export default function HotelStatus({ hotelData, onClose }) {
  const printRef = useRef();

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!hotelData) return null;

  // Print only the popup content
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to rebind React events
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-40"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          ref={printRef}
          className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[100vh] overflow-auto p-6 relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

         

          <h2 className="text-xl font-semibold mb-4">{hotelData.hotelName}</h2>
          <span className="text-sm text-gray-500 mb-4">Your hotel booking is on hold. Final confirmation will be sent once payment is processed.</span>


          {/* Hotel Image */}
          {hotelData.hotelImage && (
            <img
              src={hotelData.hotelImage}
              alt={hotelData.hotelName}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}

          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Booking ID:</strong> {hotelData.bookingId}
            </p>
            <p>
              <strong>Guest Name:</strong> {hotelData.fullName}
            </p>
            <p>
              <strong>Booking Status:</strong> {hotelData.hotelBookingStatus}
            </p>
            <p>
              <strong>Hotel Type:</strong> {hotelData.hotelType}
            </p>
            <p>
              <strong>Payment Method:</strong> {hotelData.paymentMethod}
            </p>
          </div>
         {/* Print button */}
          <button
            onClick={handlePrint}
            className="cursor-pointer mt-5 bg-[var(--primary-color)] text-white px-3 py-1 rounded  transition"
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
}
