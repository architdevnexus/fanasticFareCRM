import React, { useState } from "react";
import CreateSale from "./CreateSaleButton";

const statusStyles = {
  Paid: "text-green-600 bg-green-100",
  Due: "text-yellow-600 bg-yellow-100",
  Canceled: "text-red-600 bg-red-100",
};

const SalesReportManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "#EKG4951",
      name: "Mona Miha",
      email: "mona@gmail.com",
      phone: "9876543210",
      bookingType: "Holiday Package",
      totalAmount: "$2000",
      paidAmount: "$1500",
      remainingAmount: "$500",
      status: "Paid",
      createdDate: "2023-09-20",
      assignedBy: "Mukti",
    },
    {
      id: "#EKG4238",
      name: "Picki Witsha",
      email: "picki@gmail.com",
      phone: "9898989898",
      bookingType: "Hotel",
      totalAmount: "$3000",
      paidAmount: "$1000",
      remainingAmount: "$2000",
      status: "Due",
      createdDate: "2023-09-25",
      assignedBy: "Abdul",
    },
    {
      id: "#EKG4339",
      name: "Jenny Wilson",
      email: "jennyw@gmail.com",
      phone: "9123456789",
      bookingType: "Flight",
      totalAmount: "$4000",
      paidAmount: "$2000",
      remainingAmount: "$2000",
      status: "Due",
      createdDate: "2023-10-01",
      assignedBy: "Prakash",
    },
  ]);

  const parseAmount = (amountStr) => Number(amountStr.replace("$", ""));

  const [selectedAgent, setSelectedAgent] = useState("All");

  const agentSales = orders.reduce((acc, order) => {
    const assignedBy = order.assignedBy;
    if (!acc[assignedBy]) {
      acc[assignedBy] = {
        name: assignedBy,
        totalBookings: 0,
        totalAmount: 0,
        paidAmount: 0,
        remainingAmount: 0,
      };
    }

    acc[assignedBy].totalBookings += 1;
    acc[assignedBy].totalAmount += parseAmount(order.totalAmount);
    acc[assignedBy].paidAmount += parseAmount(order.paidAmount);
    acc[assignedBy].remainingAmount += parseAmount(order.remainingAmount);

    return acc;
  }, {});

  const handleAddSale = (newSale) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      { id: `#EKG${Math.floor(Math.random() * 9000) + 1000}`, ...newSale },
    ]);
  };

  const agents = ["All", ...new Set(orders.map((o) => o.assignedBy))];

  const filteredOrders =
    selectedAgent === "All"
      ? orders
      : orders.filter((o) => o.assignedBy === selectedAgent);

  return (
    <div className="p-6 bg-[#f8f9fc] min-h-screen space-y-6">
      <div className="flex justify-between items-center bg-[#f8f9fc] p-4">
        <div className="text-lg text-[#A3A3A3]">Sales Report Management</div>
        <CreateSale onAddSale={handleAddSale} />
      </div>

      {/* Sales Stats Cards */}
      <section className="mb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 px-10 h-[250px]">
          {[
            { label: "Flight Sales", value: 57, color: "from-blue-400 to-blue-600", icon: "✈️" },
            { label: "Hotel Sales", value: 74, color: "from-yellow-400 to-yellow-600", icon: "🏨" },
            { label: "Holiday Packages Sales", value: 15, color: "from-pink-400 to-pink-600", icon: "🏝️" },
            { label: "Total Sales", value: 215, color: "from-green-400 to-green-600", icon: "💰" },
          ].map(({ label, value, color, icon }) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl shadow-md`}>
                {icon}
              </div>
              <p className="text-sm text-gray-500 mt-3">{label}</p>
              <p className="text-3xl font-bold text-gray-800">{value}</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full bg-gradient-to-r ${color}`}
                  style={{
                    width: `${Math.min((value / 250) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sales by Agent */}
      <section className="pt-22">
        <div className="bg-white rounded-2xl shadow-lg p-6 m-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">📊</span>
            Sales by Assigned Agent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(agentSales).map((agent) => (
              <div
                key={agent.name}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-lg shadow-inner">
                    {agent.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-gray-500">Bookings:</span>
                    <span className="font-medium text-gray-800">{agent.totalBookings}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Total Amount:</span>
                    <span className="font-medium text-green-600">${agent.totalAmount}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Paid Amount:</span>
                    <span className="font-medium text-blue-600">${agent.paidAmount}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Remaining:</span>
                    <span className="font-medium text-red-600">${agent.remainingAmount}</span>
                  </p>
                </div>

                <div className="mt-4">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-teal-500"
                      style={{
                        width: `${Math.min(
                          (agent.paidAmount / agent.totalAmount) * 100 || 0,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((agent.paidAmount / agent.totalAmount) * 100 || 0)}% Paid
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orders Table */}
      <section className="pt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Latest Orders</h2>
          <select
            className="border px-3 py-1 rounded-md"
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
          >
            {agents.map((agent) => (
              <option key={agent} value={agent}>
                {agent}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Booking Type</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Payment Status</th>
              <th className="px-4 py-3">Paid</th>
              <th className="px-4 py-3">Remaining</th>
              <th className="px-4 py-3">Agent</th>
              <th className="px-4 py-3">Created Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{order.name}</td>
                <td className="px-4 py-3">{order.email}</td>
                <td className="px-4 py-3">{order.phone}</td>
                <td className="px-4 py-3">{order.bookingType}</td>
                <td className="px-4 py-3">{order.totalAmount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                  >
                    <span className="mr-1 w-2 h-2 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">{order.paidAmount}</td>
                <td className="px-4 py-3">{order.remainingAmount}</td>
                <td className="px-4 py-3">{order.assignedBy}</td>
                <td className="px-4 py-3">{order.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReportManagement;
