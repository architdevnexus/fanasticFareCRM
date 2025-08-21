import React, { useState } from "react";
import CreateSale from "./SalesReportManagement/CreateSaleButton";

const statusStyles = {
  Paid: "text-green-600 bg-green-100",
  Due: "text-yellow-600 bg-yellow-100",
  Canceled: "text-red-600 bg-red-100",
};

export const FlightSalesReportManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "#EKG4951",
      name: "Mona Miha",
      email: "mona@gmail.com",
      phone: "9876543210",
      createdDate: "2023-09-20",
      assignedBy: "Mukti",
      baseFare: 1800,
      taxes: 200,
      discount: 200,
      commission: 100,
      profitMargin: "20%",
      ticketsSold: 2,
      remarks: "Confirmed",
      status: "Paid",
      pnrNo: "PNR12345",
      pnrStatus: "Confirmed",
      departureTime: "10:00 AM",
      arrivalTime: "6:00 PM",
      flightNo: "AI202",
      seatNo: "12A",
      etk: "ETK56789",
      passportId: "M1234567",
      departureAirport: "Delhi IGI / Terminal 3",
    },
    {
      id: "#EKG4238",
      name: "Picki Witsha",
      email: "picki@gmail.com",
      phone: "9898989898",
      createdDate: "2023-09-25",
      assignedBy: "Abdul",
      baseFare: 2500,
      taxes: 500,
      discount: 0,
      commission: 150,
      profitMargin: "15%",
      ticketsSold: 4,
      remarks: "Awaiting Advance",
      status: "Due",
      pnrNo: "PNR67890",
      pnrStatus: "Pending",
      departureTime: "9:00 AM",
      arrivalTime: "5:00 PM",
      flightNo: "EK303",
      seatNo: "8C",
      etk: "ETK99887",
      passportId: "P5678901",
      departureAirport: "Mumbai / Terminal 2",
    },
    {
      id: "#EKG8821",
      name: "Sara Khan",
      email: "sara.khan@example.com",
      phone: "9123456789",
      createdDate: "2023-09-28",
      assignedBy: "Priya",
      baseFare: 1500,
      taxes: 150,
      discount: 50,
      commission: 80,
      profitMargin: "18%",
      ticketsSold: 1,
      remarks: "Ticket Issued",
      status: "Paid",
      pnrNo: "PNR45678",
      pnrStatus: "Confirmed",
      departureTime: "7:30 PM",
      arrivalTime: "3:45 AM",
      flightNo: "QR901",
      seatNo: "15B",
      etk: "ETK11223",
      passportId: "L7890123",
      departureAirport: "Bangalore / Terminal 1",
    },
  ]);

  const metrics = [
    { title: "Base Fare", value: `$${orders.reduce((acc, o) => acc + o.baseFare, 0)}` },
    { title: "Taxes & Fees", value: `$${orders.reduce((acc, o) => acc + o.taxes, 0)}` },
    { title: "Total Fare", value: `$${orders.reduce((acc, o) => acc + o.baseFare + o.taxes, 0)}` },
    { title: "Tickets Sold", value: orders.reduce((acc, o) => acc + o.ticketsSold, 0) },
    { title: "Discount Applied", value: `$${orders.reduce((acc, o) => acc + o.discount, 0)}` },
    { title: "Final Amount Paid", value: `$${orders.reduce((acc, o) => acc + (o.baseFare + o.taxes - o.discount), 0)}` },
    { title: "Commission Earned", value: `$${orders.reduce((acc, o) => acc + o.commission, 0)}` },
    { title: "Average Profit Margin", value: "17%" },
  ];

  const handleAddSale = (newSale) => {
    setOrders((prev) => [...prev, { id: `#ID${Date.now()}`, ...newSale }]);
  };

  return (
    <div className="p-6 bg-[#f8f9fc] min-h-screen space-y-8 w-[50%]">
      <div className="flex justify-between items-center bg-[#f8f9fc] p-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Flight Sales Report Management
        </h1>
        {/* <CreateSale onAddSale={handleAddSale} /> */}
      </div>

      {/* Metrics */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Sales & Revenue Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Latest Orders</h2>
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Booking Date</th>
              <th className="px-4 py-3">Assigned To</th>
              <th className="px-4 py-3">Base Fare</th>
              <th className="px-4 py-3">Taxes</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Total Fare</th>
              <th className="px-4 py-3">Commission</th>
              <th className="px-4 py-3">Profit Margin</th>
              <th className="px-4 py-3">Tickets Sold</th>
              <th className="px-4 py-3">Remarks</th>
              <th className="px-4 py-3">PNR No</th>
              <th className="px-4 py-3">PNR Status</th>
              <th className="px-4 py-3">Departure Time</th>
              <th className="px-4 py-3">Arrival Time</th>
              <th className="px-4 py-3">Flight No</th>
              <th className="px-4 py-3">Seat No.</th>
              <th className="px-4 py-3">ETK</th>
              <th className="px-4 py-3">Passport / ID Number</th>
              <th className="px-4 py-3">Departure Airport / Terminal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{o.name}</td>
                <td className="px-4 py-3">{o.email}</td>
                <td className="px-4 py-3">{o.phone}</td>
                <td className="px-4 py-3">{o.createdDate}</td>
                <td className="px-4 py-3">{o.assignedBy}</td>
                <td className="px-4 py-3">${o.baseFare}</td>
                <td className="px-4 py-3">${o.taxes}</td>
                <td className="px-4 py-3">${o.discount}</td>
                <td className="px-4 py-3">${o.baseFare + o.taxes}</td>
                <td className="px-4 py-3">${o.commission}</td>
                <td className="px-4 py-3">{o.profitMargin}</td>
                <td className="px-4 py-3">{o.ticketsSold}</td>
                <td className="px-4 py-3">{o.remarks}</td>
                <td className="px-4 py-3">{o.pnrNo}</td>
                <td className="px-4 py-3">{o.pnrStatus}</td>
                <td className="px-4 py-3">{o.departureTime}</td>
                <td className="px-4 py-3">{o.arrivalTime}</td>
                <td className="px-4 py-3">{o.flightNo}</td>
                <td className="px-4 py-3">{o.seatNo}</td>
                <td className="px-4 py-3">{o.etk}</td>
                <td className="px-4 py-3">{o.passportId}</td>
                <td className="px-4 py-3">{o.departureAirport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
