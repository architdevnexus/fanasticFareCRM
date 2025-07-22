import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../../DataStore/Revenue.json";

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
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}:{" "}
            <strong>
              $
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

const quarters = {
  Q1: ["Jan", "Feb", "Mar"],
  Q2: ["Apr", "May", "Jun"],
  Q3: ["Jul", "Aug", "Sep"],
  Q4: ["Oct", "Nov", "Dec"],
};

const halves = {
  H1: [...quarters.Q1, ...quarters.Q2],
  H2: [...quarters.Q3, ...quarters.Q4],
};

export default function RevenueChart() {
  const [filter, setFilter] = useState("Yearly");

  const filteredData = useMemo(() => {
    switch (filter) {
      case "Quarterly":
        return data.filter((d) => quarters.Q2.includes(d.month)); // For example Q2
      case "Half-Yearly":
        return data.filter((d) => halves.H1.includes(d.month)); // H1 months
      case "Yearly":
      default:
        return data;
    }
  }, [filter]);

  return (
    <div className="w-full p-3 rounded-2xl shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl flex flex-col items-start  font-semibold text-[var(--primary-color)] mb-4">
          Overview
          <span className="text-xs text-[var(--secondary-text-color)]">Monthly Earning</span>
        </h2>

        <div className="mb-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded bg-gray-100 cursor-pointer focus:outline-none text-[var(--secondary-text-color)]"
          >
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="revenue"
            name="Revenue"
            fill="var(--primary-color)"
            radius={[5, 5, 0, 0]}
            isAnimationActive
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
