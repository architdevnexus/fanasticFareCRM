import Dashnav from "../../../Component/Dashnav";
import BookingOperationTable from "../../../Component/Table/BookinOperationTable";
import FareManagementTable from "../../../Component/Table/FareManagementTable";
import PnrManagementTable from "../../../Component/Table/PnrManagementTable";
import SegmentManagementTable from "../../../Component/Table/SegmentManagementTable";

export default function FlightExtranet() {
  const cardData = [
    { label: "Active Fares", data: 256 },
    { label: "Segments", data: 74 },
    { label: "Pending PNRs", data: 12 },
    { label: "Total Bookings", data: 209 },
  ];

  const Card = ({ fare, data }) => (
    <div className="flex p-4 flex-col items-start gap-2 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <span className="text-sm text-gray-500">{fare}</span>
      <span className="text-2xl font-semibold text-gray-800">{data}</span>
    </div>
  );

  return (
    <section className="p-4 bg-gray-50 min-h-screen">
      <Dashnav />

      {/* Summary Cards */}
      <div className="grid gap-4 p-4 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cardData.map((e, index) => (
          <Card key={index} fare={e.label} data={e.data} />
        ))}
      </div>

      {/* Fare Management Table */}
      <section className="mt-8 px-4">
        {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">Fare Management</h2> */}
        <FareManagementTable />
      </section>

      {/* Dual Tables: PNR & Segment */}
      <section className="mt-10 px-4">
        {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">PNR & Segment Details</h2> */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="w-full md:w-1/2">
            <PnrManagementTable />
          </div>
          <div className="w-full md:w-1/2">
            <SegmentManagementTable />
          </div>
        </div>
      </section>

      {/* Booking Operations */}
      <section className="mt-10 px-4 mb-16">
        {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">Booking Operations</h2> */}
        <BookingOperationTable />
      </section>
    </section>
  );
}
