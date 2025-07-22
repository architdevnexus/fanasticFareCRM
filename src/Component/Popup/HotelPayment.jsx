import { useEffect, useRef } from "react";

export default function HotelPayment({ paymentData, onClose }) {
  const printRef = useRef();

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!paymentData) return null;

  // Print only the popup content
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // reload to rebind React events after print
  };

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-black/60 z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div
          ref={printRef}
          className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-auto p-6 relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Image */}
          {paymentData.paymentImage && (
            <img
              src={paymentData.hotelImage}
              alt="Payment"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          )}

          <h2 className="text-xl font-semibold mb-2">Payment Details</h2>

          <p className="mb-4 text-gray-600">
            Review your payment information below. You can print this receipt for your records.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Booking ID:</strong> {paymentData.bookingId}
            </p>
            <p>
              <strong>Guest Name:</strong> {paymentData.fullName}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentData.paymentMethod}
            </p>
            <p>
              <strong>Payment Status:</strong> {paymentData.paymentStatus || "N/A"}
            </p>
            <p>
              <strong>Amount Paid:</strong> {paymentData.amountPaid ? `$${paymentData.amountPaid}` : "N/A"}
            </p>
            <p>
              <strong>Transaction ID:</strong> {paymentData.transactionId || "N/A"}
            </p>
          </div>

          {/* Print button */}
          <button
            onClick={handlePrint}
            className="mt-6 bg-[var(--primary-color)] text-white px-4 py-2 rounded transition"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </>
  );
}
