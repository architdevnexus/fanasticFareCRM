import { useState } from "react";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { MdOutlineEmojiTransportation } from "react-icons/md";

export default function DashBookingList() {
  const [activeTab, setActiveTab] = useState("Air Ticket");

  const options = [
    {
      icon: <PiAirplaneTakeoffLight className="text-blue-600 text-lg" />,
      label: "Air Ticket",
    },
    {
      icon: <LuHotel className="text-green-600 text-lg" />,
      label: "Hotel Booking",
    },
    {
      icon: <MdOutlineEmojiTransportation className="text-yellow-600 text-lg" />,
      label: "Tour Package",
    },
  ];

  const airdata = [
    {
      "PNR NO": "02GFD5",
      "PAX  Name": "Rahul Batra",
      "Flight Date": "15/07/2025",
      "Flight No": "EK822",
      "Amount": 12000,
      "Status": "Ticketed",
    },
    {
      "PNR NO": "02GFD5",
      "PAX  Name": "Aman Jindal",
      "Flight Date": "25/06/2025",
      "Flight No": "EK852",
      "Amount": 14011,
      "Status": "Pending",
    },
    {
      "PNR NO": "02GFD5",
      "PAX  Name": "Shivam Gupta",
      "Flight Date": "24/06/2025",
      "Flight No": "EK802",
      "Amount": 11450,
      "Status": "On Hold",
    },
  ];

  const hotelData = [
    {
      "Booking ID": "HTL2025A1",
      "Guest Name": "Ashok Batra",
      "Check-in": "15/07/2025",
      "Check-out": "17/07/2025",
      "Hotel Name": "The Grand Palace",
      "Amount": 4590,
      "Status": "Confirmed",
    },
    {
      "Booking ID": "HTL2025A2",
      "Guest Name": "Abdul Azeem",
      "Check-in": "16/07/2025",
      "Check-out": "18/07/2025",
      "Hotel Name": "Ocean View Resort",
      "Amount": 3220,
      "Status": "Confirmed",
    },
    {
      "Booking ID": "HTL2025A3",
      "Guest Name": "Asish Tiyagi",
      "Check-in": "17/07/2025",
      "Check-out": "19/07/2025",
      "Hotel Name": "Mountain Heights Inn",
      "Amount": 3902,
      "Status": "Pending",
    },
  ];

  const tourData = [
    {
      "Package ID": "TOUR8751",
      "Traveler Name": "Mansi Jindal ",
      "Destination": "Dubai",
      "Start Date": "20/07/2025",
      "Package Type": "Luxury",
      "Amount": 15000,
      "Status": "Booked",
    },
    {
      "Package ID": "TOUR8752",
      "Traveler Name": "Sejal Garg",
      "Destination": "Bali",
      "Start Date": "22/07/2025",
      "Package Type": "Standard",
      "Amount": 9800,
      "Status": "Confirmed",
    },
    {
      "Package ID": "TOUR8753",
      "Traveler Name": "Aayush Badkul",
      "Destination": "Manali",
      "Start Date": "18/07/2025",
      "Package Type": "Budget",
      "Amount": 5000,
      "Status": "Cancelled",
    },
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "ticketed":
      case "confirmed":
      case "booked":
        return "var(--green-text-color)";
      case "pending":
        return "var(--yellow-color)";
      case "on hold":
      case "cancelled":
        return "var(--violet-color)";
      default:
        return "#999";
    }
  };

  const getActiveData = () => {
    switch (activeTab) {
      case "Air Ticket":
        return airdata;
      case "Hotel Booking":
        return hotelData;
      case "Tour Package":
        return tourData;
      default:
        return [];
    }
  };

  return (
    <section className="w-full flex items-center justify-center">
      <div className="flex flex-col items-start gap-4 p-4 w-[95%] bg-white rounded-xl shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-black font-semibold text-xl">
              Latest Booking List
            </span>
            <span className="text-[#196B91] text-sm">
              Most Recent Booking List
            </span>
          </div>

          <div className="flex items-center gap-4">
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center gap-2 py-1 px-2 cursor-pointer transition border-b-[1px] ${
                  activeTab === item.label
                    ? "border-[#196B91]"
                    : "border-transparent"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium text-gray-800">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Data */}
        <div className="w-full flex flex-col gap-6">
          {getActiveData().map((row, index) => (
            <div
              key={index}
              className="flex flex-wrap md:flex-nowrap justify-between w-full border-b border-gray-200 pb-2"
            >
              {Object.entries(row).map(([key, value], idx) => (
                <div key={idx} className="flex flex-col min-w-[120px] gap-1">
                  <span
                    className="text-black font-medium truncate"
                    style={
                      key.toLowerCase() === "status"
                        ? { color: getStatusColor(value) }
                        : {}
                    }
                  >
                    {value}
                  </span>
                  <span className="text-xs text-gray-400">{key}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
