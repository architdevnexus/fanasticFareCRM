import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const defaultData = [
  { date: "01 Jun", flights: 3200, hotels: 2100, tours: 1800 },
  { date: "07 Jun", flights: 4100, hotels: 3000, tours: 2000 },
  { date: "14 Jun", flights: 3900, hotels: 2800, tours: 2200 },
  { date: "21 Jun", flights: 4200, hotels: 3100, tours: 2500 },
  { date: "28 Jun", flights: 4500, hotels: 3400, tours: 2700 },
  { date: "05 Jul", flights: 4700, hotels: 3500, tours: 2900 },
  { date: "12 Jul", flights: 5000, hotels: 3700, tours: 3200 },
];

const defaultLines = [
  {
    dataKey: "flights",
    name: "Flight Booking",
    stroke: "var(--primary-color)",
  },
  {
    dataKey: "hotels",
    name: "Hotel Booking",
    stroke: "var(--red-text-color)",
  },
  {
    dataKey: "tours",
    name: "Tour Package",
    stroke: "var(--yellow-color)",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border text-sm space-y-1">
        <p className="font-semibold text-[var(--primary-color)]">{label}</p>
        {payload.map((item, i) => (
          <p key={i} className="flex justify-between gap-2" style={{ color: item.color }}>
            {item.name}: <strong>{item.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueOverviewChart({ data = defaultData, lineKeys = defaultLines }) {
  return (
    <div className="w-[60%] bg-white p-4 rounded-2xl shadow-md">
      <div className="text-center">
        <h2 className="text-base font-bold text-[var(--primary-color)]">Revenue Overview</h2>
        <p className="text-sm text-[var(--secondary-text-color)]">June - July</p>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
          <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }} />
          <Legend wrapperStyle={{ fontSize: '13px' }} />
          {lineKeys.map(({ dataKey, name, stroke }) => (
            <Line
              key={dataKey}
              type="monotone"
              dataKey={dataKey}
              name={name}
              stroke={stroke}
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}