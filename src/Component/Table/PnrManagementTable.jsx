import { MdNavigateNext } from "react-icons/md";

export default function PnrManagementTable() {
  const pnrData = [
    {
      pnr: "PNR123456",
      bookingReference: "BR789101",
      status:"Active"
    },
    {
      pnr: "PNR654321",
      bookingReference: "BR112233",
      status: "Active"
    },
    {
      pnr: "PNR987654",
      bookingReference: "BR445566",
      status: "Active"
    },
    {
      pnr: "PNR321654",
      bookingReference: "BR778899",
      status: "Active"
    }
  ];

  return (
    <div className="flex flex-col gap-4 bg-white p-4 shadow-md rounded-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">PNR Management</h2>
        <button className="px-4 cursor-pointer py-1.5 text-sm text-white bg-[var(--primary-color)] rounded-md hover:bg-opacity-90 transition">
          Add PNR Entry
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-[var(--primary-color)] text-white">
            <tr>
              <th className="px-4 py-2 font-medium">PNR</th>
              <th className="px-4 py-2 font-medium">Booking Reference</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {pnrData.map((entry, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{entry.pnr}</td>
                <td className="px-4 py-2">{entry.bookingReference}</td>
                <td className="px-4 py-2 flex items-center gap-2 text-[var(--primary-color)] font-medium">
                                 {entry.status} <MdNavigateNext />
                               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
