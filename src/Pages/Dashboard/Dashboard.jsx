import Dashnav from "../../Component/Dashnav";
import Dashbooking from "../../Component/Cards/Dashbooking";
import DashChart from "../../Component/Cards/DashChartCard";
import VisitorChart from "../../Component/Charts/VisitorChart";
import CustomLineChart from "../../Component/Charts/CustomLineChart";
import CustomBarChart from "../../Component/Charts/CustomBarChart";
import BounceRateChart from "../../Component/Charts/BounceRateChart";
import DashBookingList from "../../Component/DashBookingList";
import RevenueOverviewChart from "../../Component/Charts/RevenueOverviewChart";
import RevenueChart from "../../Component/Charts/RevenueChart";

export default function Dashboard() {
  const bookingData = [
    {
      text: "Flight Bookings",
      num: 5432,
      profit: true,
      percentage: 16,
    },
    {
      text: "Hotel Bookings",
      num: 1234,
      profit: false,
      percentage: -12,
    },
    {
      text: "Hotel Packages",
      num: 123,
      profit: true,
      percentage: 8,
    },
  ];

  const chartData = [
    {
      title: "Active Visitors",
      value: "157,457",
      percentage: 6.7,
      isIncrease: true,
      charts: [
        { name: "Jan", value: 4000 },
        { name: "Feb", value: 4500 },
        { name: "Mar", value: 4200 },
        { name: "Apr", value: 5000 },
        { name: "May", value: 5300 },
      ],
      chart: (data) => <VisitorChart data={data} />,
    },
    {
      title: "Visitors per Minute",
      value: "1,235",
      percentage: 3.4,
      isIncrease: false,
      charts: [
        { name: "10:00", value: 60 },
        { name: "10:01", value: 55 },
        { name: "10:02", value: 50 },
        { name: "10:03", value: 48 },
        { name: "10:04", value: 45 },
      ],
      chart: (data) => <CustomLineChart data={data} lines={[{ dataKey: "value", color: "var(--green-text-color)" }]} xAxisKey="name" />,
    },
    {
      title: "Conversion Rate",
      value: "4.5%",
      percentage: 1.2,
      isIncrease: true,
      charts: [
        { name: "Mon", value: 3.2 },
        { name: "Tue", value: 3.8 },
        { name: "Wed", value: 4.1 },
        { name: "Thu", value: 4.3 },
        { name: "Fri", value: 4.5 },
      ],
      chart: (data) => <CustomBarChart chartData={data} />,
    },
    {
      title: "Bounce Rate",
      value: "37.8%",
      percentage: 2.1,
      isIncrease: false,
      charts: [
        { name: "Mon", value: 40 },
        { name: "Tue", value: 39 },
        { name: "Wed", value: 38 },
        { name: "Thu", value: 37 },
        { name: "Fri", value: 37.8 },
      ],
      chart: (data) => <BounceRateChart data={data} />,
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6 px-6 py-4 bg-[var(--secondry-color)] rounded-tl-4xl min-h-screen">
      {/* Top Navigation */}
      <Dashnav />

      {/* Booking Cards Section */}
      <div className="w-full flex items-center justify-center">
        <div className="rounded-2xl shadow-lg p-4 bg-white flex items-center justify-between gap-4 w-[90%]">
          {bookingData.map((item, index) => (
            <div key={index} className="flex items-center justify-around gap-4 flex-1">
              <Dashbooking
                text={item.text}
                num={item.num}
                profit={item.profit}
                percentage={item.percentage}
              />
              {index !== bookingData.length - 1 && (
                <div className="w-[1px] bg-gray-300 h-18 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chart Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        {chartData.map((item, index) => (
          <DashChart
            key={index}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            isIncrease={item.isIncrease}
            ChartComponent={() => item.chart(item.charts)}
          />
        ))}
      </div>

      {/* Latest Booking List */}
      <div className="w-full">
        <DashBookingList />
      </div>

      <div className="flex gap-3">

      <RevenueOverviewChart/>
      <RevenueChart/>
      </div>
    </div>
  );
}   