import React, { useState, useEffect } from "react";

const CreateSale = ({ onAddSale }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bookingType: "",
    amount: "",
    paymentStatus: "Paid",
    advance: "", // percentage
    remaining: "",
    agentNo: "",
    createdDate: new Date().toISOString().split("T")[0],
  });

  const agents = ["Agent 001", "Agent 002", "Agent 003", "Agent 004", "Mukti", "Abdul", "Prakash"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Auto calculation of remaining amount
  useEffect(() => {
    const amount = parseFloat(form.amount) || 0;
    const advancePercent = parseFloat(form.advance) || 0;

    const advanceAmount = (amount * advancePercent) / 100;
    const remainingAmount = amount - advanceAmount;

    setForm((prev) => ({
      ...prev,
      remaining: remainingAmount || "",
    }));
  }, [form.amount, form.advance]);

  const handleSubmit = () => {
    const amount = parseFloat(form.amount) || 0;
    const advancePercent = parseFloat(form.advance) || 0;
    const paidAmount = (amount * advancePercent) / 100;
    const remainingAmount = amount - paidAmount;

    onAddSale({
      id: `#EKG${Math.floor(Math.random() * 9000) + 1000}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      bookingType: form.bookingType,
      totalAmount: `$${amount}`,
      paidAmount: `$${paidAmount}`,
      remainingAmount: `$${remainingAmount}`,
      status: form.paymentStatus,
      createdDate: form.createdDate,
      assignedBy: form.agentNo,
    });

    setShowModal(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      bookingType: "",
      amount: "",
      paymentStatus: "Paid",
      advance: "",
      remaining: "",
      agentNo: "",
      createdDate: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <>
      <button
        className="bg-teal-800 hover:bg-teal-900 text-white text-sm px-4 py-2 rounded-md shadow"
        onClick={() => setShowModal(true)}
      >
        + Create Sale
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 animate-fadeIn overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Create New Sale
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Customer Name"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />

              {/* Booking Type Dropdown */}
              <select
                name="bookingType"
                value={form.bookingType}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option value="">Select Booking Type</option>
                <option value="Hotel">Hotel</option>
                <option value="Flight">Flight</option>
                <option value="Holiday Package">Holiday Package</option>
              </select>

              <input
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Amount"
                type="number"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                name="advance"
                value={form.advance}
                onChange={handleChange}
                placeholder="Advance (%)"
                type="number"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <select
                name="paymentStatus"
                value={form.paymentStatus}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Due">Due</option>
              </select>

              <select
                name="agentNo"
                value={form.agentNo}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option value="">Select Agent</option>
                {agents.map((agent, idx) => (
                  <option key={idx} value={agent}>
                    {agent}
                  </option>
                ))}
              </select>

              <input
                name="createdDate"
                value={form.createdDate}
                onChange={handleChange}
                type="date"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                name="remaining"
                value={form.remaining}
                readOnly
                placeholder="Remaining Amount"
                type="number"
                className="border bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 mt-6 border-t pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm bg-teal-700 text-white rounded-lg shadow hover:bg-teal-800"
              >
                Save Sale
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
};

export default CreateSale;
