import { MdNavigateNext } from "react-icons/md";

export default function SegmentManagementTable() {
  const segmentsData = [
    {
      segment: "DEL - MUM",
      flightNumber: "AI-301",
      status: "Active"
    },
    {
      segment: "BLR - HYD",
      flightNumber: "SG-509",
      status: "Inactive"
    },
    {
      segment: "CCU - GOI",
      flightNumber: "6E-211",
      status: "Active"
    },
    {
      segment: "IXC - PNQ",
      flightNumber: "UK-450",
      status: "Active"
    }
  ];

  return (
    <div className="flex flex-col gap-4 bg-white p-4 shadow-md rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Segment Management
        </h2>
        <button className="px-4 py-1.5 text-sm text-white bg-[var(--primary-color)] rounded-md hover:bg-opacity-90 transition">
          Create Segment
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-[var(--primary-color)] text-white">
            <tr>
              <th className="px-4 py-2 font-medium">Segment</th>
              <th className="px-4 py-2 font-medium">Flight Number</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {segmentsData.map((segment, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{segment.segment}</td>
                <td className="px-4 py-2">{segment.flightNumber}</td>
                <td className="px-4 py-2 flex items-center gap-2 text-[var(--primary-color)] font-medium">
                  {segment.status} <MdNavigateNext />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
