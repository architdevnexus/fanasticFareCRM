export default function BookingOperationTable() {
  const bookings = [
    {
      bookingId: "BKN1234",
      passengerName: "Vansh Kaushik Ji",
      bookingDateTime: "07/07/2022 & 4:00 AM",
      source: "Agent",
      status: "Pending",
    },
    {
      bookingId: "BKN5678",
      passengerName: "Ravi Sharma",
      bookingDateTime: "15/08/2022 & 2:30 PM",
      source: "Website",
      status: "Confirmed",
    },
    {
      bookingId: "BKN9012",
      passengerName: "Priya Mehta",
      bookingDateTime: "21/10/2022 & 6:00 PM",
      source: "Agent",
      status: "Cancelled",
    },
    {
      bookingId: "BKN3456",
      passengerName: "Aman Verma",
      bookingDateTime: "01/12/2022 & 11:00 AM",
      source: "Mobile App",
      status: "Pending",
    }
  ];

  return (
    <div className="flex flex-col bg-white p-4 shadow-md rounded-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-gray-700">Booking Operations</span>
 
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[var(--primary-color)] text-white">
            <tr>
              <th className="text-left px-4 py-2">Booking ID</th>
              <th className="text-left px-4 py-2">Passenger Name</th>
              <th className="text-left px-4 py-2">Booking Date & Time</th>
              <th className="text-left px-4 py-2">Source</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{booking.bookingId}</td>
                <td className="px-4 py-2">{booking.passengerName}</td>
                <td className="px-4 py-2">{booking.bookingDateTime}</td>
                <td className="px-4 py-2">{booking.source}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    booking.status === "Pending"
                      ? "text-yellow-600"
                      : booking.status === "Confirmed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {booking.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
