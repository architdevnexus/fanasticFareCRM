import React, { useState } from "react";

const CreateHotelSaleButton = ({ onAddBooking }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    guestName: "",
    email: "",
    phone: "",
    bookingDate: new Date().toISOString().split("T")[0],
    checkIn: "",
    checkOut: "",
    hotelName: "",
    roomType: "",
    guests: 1,
    nights: 1,
    roomRate: "",
    taxes: "",
    discount: "",
    totalAmount: "",
    paidAmount: "",
    remainingAmount: "",
    paymentMethod: "",
    commission: "",
    profitMargin: "",
    status: "Paid",
    bookedBy: "",
    remarks: "",
  });

  const agents = ["Emma Smith", "David Lee", "Ali Khan", "Sarah Parker"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAddBooking({
      ...form,
      guests: Number(form.guests),
      nights: Number(form.nights),
      roomRate: Number(form.roomRate),
      taxes: Number(form.taxes),
      discount: Number(form.discount),
      totalAmount: Number(form.totalAmount),
      paidAmount: Number(form.paidAmount),
      remainingAmount: Number(form.remainingAmount),
      commission: Number(form.commission),
    });
    setShowModal(false);
    setForm({
      guestName: "",
      email: "",
      phone: "",
      bookingDate: new Date().toISOString().split("T")[0],
      checkIn: "",
      checkOut: "",
      hotelName: "",
      roomType: "",
      guests: 1,
      nights: 1,
      roomRate: "",
      taxes: "",
      discount: "",
      totalAmount: "",
      paidAmount: "",
      remainingAmount: "",
      paymentMethod: "",
      commission: "",
      profitMargin: "",
      status: "Paid",
      bookedBy: "",
      remarks: "",
    });
  };

  return (
    <>
      <button
        className="bg-teal-800 hover:bg-teal-900 text-white text-sm px-4 py-2 rounded-md shadow"
        onClick={() => setShowModal(true)}
      >
        + Create Booking
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 animate-fadeIn overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Create New Hotel Booking
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
              <input name="guestName" value={form.guestName} onChange={handleChange} placeholder="Guest Name" className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />

              <input name="bookingDate" type="date" value={form.bookingDate} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />

              <input name="hotelName" value={form.hotelName} onChange={handleChange} placeholder="Hotel Name" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="roomType" value={form.roomType} onChange={handleChange} placeholder="Room Type" className="border rounded-lg px-3 py-2 text-sm" />
              
              <input name="guests" value={form.guests} type="number" onChange={handleChange} placeholder="Guests" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="nights" value={form.nights} type="number" onChange={handleChange} placeholder="Nights" className="border rounded-lg px-3 py-2 text-sm" />

              <input name="roomRate" value={form.roomRate} type="number" onChange={handleChange} placeholder="Room Rate" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="taxes" value={form.taxes} type="number" onChange={handleChange} placeholder="Taxes" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="discount" value={form.discount} type="number" onChange={handleChange} placeholder="Discount" className="border rounded-lg px-3 py-2 text-sm" />

              <input name="totalAmount" value={form.totalAmount} type="number" onChange={handleChange} placeholder="Total Amount" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="paidAmount" value={form.paidAmount} type="number" onChange={handleChange} placeholder="Paid Amount" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="remainingAmount" value={form.remainingAmount} type="number" onChange={handleChange} placeholder="Remaining Amount" className="border rounded-lg px-3 py-2 text-sm" />

              <input name="paymentMethod" value={form.paymentMethod} onChange={handleChange} placeholder="Payment Method" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="commission" value={form.commission} type="number" onChange={handleChange} placeholder="Commission" className="border rounded-lg px-3 py-2 text-sm" />
              <input name="profitMargin" value={form.profitMargin} onChange={handleChange} placeholder="Profit Margin" className="border rounded-lg px-3 py-2 text-sm" />

              <select name="status" value={form.status} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm">
                <option value="Paid">Paid</option>
                <option value="Due">Due</option>
                <option value="Canceled">Canceled</option>
              </select>

              <select name="bookedBy" value={form.bookedBy} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm">
                <option value="">Select Agent</option>
                {agents.map((agent, idx) => (
                  <option key={idx} value={agent}>
                    {agent}
                  </option>
                ))}
              </select>

              <input name="remarks" value={form.remarks} onChange={handleChange} placeholder="Remarks" className="col-span-2 border rounded-lg px-3 py-2 text-sm" />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 mt-6 border-t pt-4">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg">
                Cancel
              </button>
              <button onClick={handleSubmit} className="px-4 py-2 text-sm bg-teal-700 text-white rounded-lg shadow hover:bg-teal-800">
                Save Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
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

export default CreateHotelSaleButton;
