import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#4f46e5",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <p className="font-semibold">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: <strong>{entry.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Main Component
export default function VisitorChart({
  data = [
    { month: "Jan", flights: 3000, hotels: 2400, tours: 2000 },
    { month: "Feb", flights: 3200, hotels: 2600, tours: 2100 },
    { month: "Mar", flights: 3500, hotels: 2900, tours: 2200 },
    { month: "Apr", flights: 4000, hotels: 3000, tours: 2500 },
    { month: "May", flights: 4200, hotels: 3300, tours: 2700 },
  ],
  bars = [
    { dataKey: "flights", name: "Flights", fill: "var(--primary-color)" },
    { dataKey: "hotels", name: "Hotels", fill: "var(--red-text-color)" },
    { dataKey: "tours", name: "Tours", fill: "var(--yellow-color)" },
  ],
  xAxisKey = "month",
}) {
  return (
    <div className="w-full h-72 bg-white rounded-xl shadow p-4">
      <h3 className="text-base font-semibold text-gray-800 mb-2">Booking Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
          <XAxis dataKey={xAxisKey} stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {bars.map(({ dataKey, fill, name }) => (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              name={name}
              fill={fill}
              radius={[4, 4, 0, 0]}
              isAnimationActive
              animationDuration={1000}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
