import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          padding: "10px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index}>
            {entry.name}: <strong>{entry.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CustomBarChart({
  chartData,
  bars,
}) {
  // Default sample data if no props are passed
  const defaultData = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 19 },
    { name: "Wed", value: 14 },
    { name: "Thu", value: 17 },
    { name: "Fri", value: 21 },
    { name: "Sat", value: 10 },
    { name: "Sun", value: 15 },
  ];

  const defaultBars = [
    { dataKey: "value", name: "Visitors", color: "var(--primary-color)" },
  ];

  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData ?? defaultData}
          margin={{ top: 0, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--secondary-color)" />
          <XAxis dataKey="name" stroke="var(--secondary-color)" />
          <YAxis stroke="var(--secondary-color)" />
          <Tooltip content={<CustomTooltip />} />
          {(bars ?? defaultBars).map(({ dataKey, color, name }) => (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={color}
              name={name}
              radius={[6, 6, 0, 0]}
              isAnimationActive
              animationDuration={1200}
              animationEasing="ease-in-out"
              barSize={30}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
