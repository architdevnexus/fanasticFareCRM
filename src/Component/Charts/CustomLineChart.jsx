import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <p>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}:{" "}
            <strong>
              {typeof entry.value === "number"
                ? entry.value.toLocaleString()
                : entry.value}
            </strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CustomLineChart({
  chartData,
  lines,
  xAxisKey,
}) {
  // Default sample data if no props are passed
  const defaultData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 4500 },
    { name: "Mar", value: 4200 },
    { name: "Apr", value: 5000 },
    { name: "May", value: 5300 },
  ];

  const defaultLines = [
    { dataKey: "value", color: "var(--green-text-color)" },
  ];

  const defaultXAxisKey = "name";

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData ?? defaultData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--secondary-color)"
          />
          <XAxis dataKey={xAxisKey ?? defaultXAxisKey} stroke="var(--secondary-color)" />
          <YAxis stroke="var(--secondary-color)" />
          <Tooltip content={<CustomTooltip />} />
          {(lines ?? defaultLines).map(({ dataKey, color }) => (
            <Line
              key={dataKey}
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
