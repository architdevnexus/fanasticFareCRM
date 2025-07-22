import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// Sample data structure:
// [{ name: "Bounce Rate", value: 37.8 }, { name: "Remaining", value: 62.2 }]

export default function BounceRatePieChart({
  data = [
    { name: "Bounce Rate", value: 37.8, fill: "var(--red-text-color)" },
    { name: "Remaining", value: 62.2, fill: "var(--secondary-color)" },
  ],
  label = "Bounce Rate",
}) {
  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="90%"
            paddingAngle={3}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
            label={({ cx, cy }) => (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "var(--primary-color)", fontSize: 22, fontWeight: "bold" }}
              >
                {data[0].value.toFixed(1)}%
              </text>
            )}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--primary-color)",
              borderRadius: "8px",
              color: "white",
              fontSize: "14px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-2 text-[var(--secondary-text-color)] font-medium">
        {label}
      </div>
    </div>
  );
}
