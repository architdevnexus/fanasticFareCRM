import React, { useState } from "react";
import CreateHotelSaleButton from "./SalesReportManagement/CreateHotelSaleButton";

const statusStyles = {
  Paid: "text-green-600 bg-green-100",
  Due: "text-yellow-600 bg-yellow-100",
  Canceled: "text-red-600 bg-red-100",
};

export const HotelSalesReportManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "#BK001",
      guestName: "John Doe",
      email: "john.doe@example.com",
      phone: "9876543210",
      bookingDate: "2025-08-05",
      checkIn: "2025-08-10",
      checkOut: "2025-08-15",
      hotelName: "Ocean View Resort",
      roomType: "Deluxe Sea View",
      guests: 2,
      nights: 5,
      roomRate: 150,
      taxes: 50,
      discount: 30,
      totalAmount: 800,
      paidAmount: 800,
      remainingAmount: 0,
      paymentMethod: "Credit Card",
      commission: 80,
      profitMargin: "25%",
      status: "Paid",
      bookedBy: "Emma Smith",
      remarks: "Honeymoon package included",
    },
    {
      id: "#BK002",
      guestName: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "9898989898",
      bookingDate: "2025-08-06",
      checkIn: "2025-08-20",
      checkOut: "2025-08-22",
      hotelName: "Mountain Retreat Lodge",
      roomType: "Standard Room",
      guests: 1,
      nights: 2,
      roomRate: 100,
      taxes: 20,
      discount: 0,
      totalAmount: 220,
      paidAmount: 100,
      remainingAmount: 120,
      paymentMethod: "Cash",
      commission: 20,
      profitMargin: "18%",
      status: "Due",
      bookedBy: "David Lee",
      remarks: "Late check-in requested",
    },
  ]);

  const metrics = [
    { title: "Total Revenue", value: `$${orders.reduce((acc, o) => acc + o.totalAmount, 0)}` },
    { title: "Total Paid", value: `$${orders.reduce((acc, o) => acc + o.paidAmount, 0)}` },
    { title: "Total Outstanding", value: `$${orders.reduce((acc, o) => acc + o.remainingAmount, 0)}` },
    { title: "Total Nights Sold", value: orders.reduce((acc, o) => acc + o.nights, 0) },
    { title: "Guests Served", value: orders.reduce((acc, o) => acc + o.guests, 0) },
    { title: "Commission Earned", value: `$${orders.reduce((acc, o) => acc + o.commission, 0)}` },
    { title: "Average Profit Margin", value: "22%" },
  ];

  const handleAddSale = (newSale) => {
    setOrders((prev) => [...prev, { id: `#BK${Date.now()}`, ...newSale }]);
  };

  return (
    <div className="p-6 bg-[#f8f9fc] min-h-screen space-y-8 w-[52%]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Hotel Sales Report Management
        </h1>
 <CreateHotelSaleButton onAddBooking={handleAddSale} />

      </div>

      {/* Metrics */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales & Revenue Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-sm text-gray-500">{metric.title}</p>
              <p className="text-xl font-bold text-gray-800">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Latest Bookings</h2>
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Guest Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Booking Date</th>
              <th className="px-4 py-3">Check-In</th>
              <th className="px-4 py-3">Check-Out</th>
              <th className="px-4 py-3">Hotel</th>
              <th className="px-4 py-3">Room Type</th>
              <th className="px-4 py-3">Guests</th>
              <th className="px-4 py-3">Nights</th>
              <th className="px-4 py-3">Room Rate</th>
              <th className="px-4 py-3">Taxes</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Total Amount</th>
              <th className="px-4 py-3">Paid</th>
              <th className="px-4 py-3">Remaining</th>
              <th className="px-4 py-3">Payment Method</th>
              <th className="px-4 py-3">Commission</th>
              <th className="px-4 py-3">Profit Margin</th>
              <th className="px-4 py-3">Remarks</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{o.guestName}</td>
                <td className="px-4 py-3">{o.email}</td>
                <td className="px-4 py-3">{o.phone}</td>
                <td className="px-4 py-3">{o.bookingDate}</td>
                <td className="px-4 py-3">{o.checkIn}</td>
                <td className="px-4 py-3">{o.checkOut}</td>
                <td className="px-4 py-3">{o.hotelName}</td>
                <td className="px-4 py-3">{o.roomType}</td>
                <td className="px-4 py-3">{o.guests}</td>
                <td className="px-4 py-3">{o.nights}</td>
                <td className="px-4 py-3">${o.roomRate}</td>
                <td className="px-4 py-3">${o.taxes}</td>
                <td className="px-4 py-3">${o.discount}</td>
                <td className="px-4 py-3">${o.totalAmount}</td>
                <td className="px-4 py-3">${o.paidAmount}</td>
                <td className="px-4 py-3">${o.remainingAmount}</td>
                <td className="px-4 py-3">{o.paymentMethod}</td>
                <td className="px-4 py-3">${o.commission}</td>
                <td className="px-4 py-3">{o.profitMargin}</td>
                <td className="px-4 py-3">{o.remarks}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusStyles[o.status]}`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
