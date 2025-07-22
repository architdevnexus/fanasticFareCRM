import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function DashChartCard({
  title = "Active Visitors",
  value = "157,457",
  percentage = 6.7,
  isIncrease = true,
  ChartComponent,
}) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-md h-72 w-full">
      {/* Header Section */}
      <div className="flex items-start justify-between w-full">
        {/* Title and Value */}
        <div className="flex flex-col">
          <span className="text-xs text-[var(--secondary-text-color)] ">{title}</span>
          <span className="text-xl font-bold text-[var(--primary-color)]">{value}</span>
        </div>

        {/* Percentage Indicator */}
        <div className="flex items-center gap-2 text-sm">
          {isIncrease ? (
            <FaArrowUp className="text-[var(--green-text-color)]" />
          ) : (
            <FaArrowDown className="text-[var(--red-text-color)]" />
          )}
          <span
            className={`font-semibold ${
              isIncrease
                ? "text-[var(--green-text-color)]"
                : "text-[var(--red-text-color)]"
            }`}
          >
            {percentage}%
          </span>
          <span
            className={`text-sm ${
              isIncrease
                ? "text-[var(--green-text-color)]"
                : "text-[var(--red-text-color)]"
            }`}
          >
            {isIncrease ? "Increase" : "Decrease"}
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full  overflow-hidden">
        {ChartComponent && <ChartComponent />}
      </div>
    </div>
  );
}
