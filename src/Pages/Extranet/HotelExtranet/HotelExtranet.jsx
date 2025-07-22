import Dashnav from "../../../Component/Dashnav";
import HotelExtranetTabs from "../../../Component/Tabs/HotelExtranetTab";
export default function HotelExtranet() {

    const cardData = [
    { label: "Active Bookings", data: 256 },
    { label: "Active Hotels", data: 74 },
    { label: "Inactive Hotels", data: 12 },
    { label: "Total Bookings", data: 209 },
  ];

  const Card = ({ fare, data }) => (
    <div className="flex cursor-pointer p-4 flex-col items-start gap-2 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <span className="text-sm text-gray-500">{fare}</span>
      <span className="text-2xl font-semibold text-gray-800">{data}</span>
    </div>
  );
    return (
        <section className="flex flex-col gap-2">
            <Dashnav/>
              {/* Summary Cards */}
      <div className="grid gap-4 p-4 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cardData.map((e, index) => (
          <Card key={index} fare={e.label} data={e.data} />
        ))}
      </div>

<section className="p-3">

      <HotelExtranetTabs/>
</section>
        </section>
    )
}