export default function FareManagementTable() {
  const data = [
    {
      fareType: "One-Way",
      airline: "Indigo",
      route: "DEL - MUM",
      baseFare: 22000,
      effectiveDate: "2025-07-17",
      status: "Active",
    },
    {
      fareType: "Round Trip",
      airline: "Air India",
      route: "BLR - HYD",
      baseFare: 18000,
      effectiveDate: "2025-08-01",
      status: "Active",
    },
    {
      fareType: "One-Way",
      airline: "SpiceJet",
      route: "CCU - DEL",
      baseFare: 15500,
      effectiveDate: "2025-07-20",
      status: "Inactive",
    },
    {
      fareType: "Round Trip",
      airline: "Vistara",
      route: "DEL - GOI",
      baseFare: 27000,
      effectiveDate: "2025-09-05",
      status: "Active",
    },
    {
      fareType: "One-Way",
      airline: "Go First",
      route: "PNQ - DEL",
      baseFare: 13000,
      effectiveDate: "2025-07-25",
      status: "Inactive",
    },
    {
      fareType: "Round Trip",
      airline: "Indigo",
      route: "DEL - IXC",
      baseFare: 12000,
      effectiveDate: "2025-08-12",
      status: "Active",
    },
    {
      fareType: "One-Way",
      airline: "AirAsia",
      route: "MAA - BOM",
      baseFare: 19000,
      effectiveDate: "2025-07-30",
      status: "Active",
    },
    {
      fareType: "Round Trip",
      airline: "SpiceJet",
      route: "DEL - LKO",
      baseFare: 9500,
      effectiveDate: "2025-08-15",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Fare Management</h2>

        <div className="flex items-center gap-2">
          <button className="bg-[var(--primary-color)] cursor-pointer text-white px-4 py-1.5 rounded-md hover:bg-opacity-90 transition">
            Upload Fare Details
          </button>
          <button className="text-[var(--primary-color)] cursor-pointer border border-[var(--primary-color)] bg-white px-4 py-1.5 rounded-md hover:bg-[var(--primary-color)] hover:text-white transition">
            View Uploaded Fares
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-sm text-left">
          <thead className="bg-[var(--primary-color)] text-white">
            <tr>
              <th className="px-4 py-2 font-medium">Fare Type</th>
              <th className="px-4 py-2 font-medium">Airline</th>
              <th className="px-4 py-2 font-medium">Route</th>
              <th className="px-4 py-2 font-medium">Base Fare</th>
              <th className="px-4 py-2 font-medium">Effective Date</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((fare, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-2">{fare.fareType}</td>
                <td className="px-4 py-2">{fare.airline}</td>
                <td className="px-4 py-2">{fare.route}</td>
                <td className="px-4 py-2">₹{fare.baseFare.toLocaleString()}</td>
                <td className="px-4 py-2">{fare.effectiveDate}</td>
                <td className="px-4 py-2 flex items-center gap-4 ">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      fare.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >  {fare.status}  
                  </span>
                  <span className="cursor-pointer hover:underline">Edit</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
