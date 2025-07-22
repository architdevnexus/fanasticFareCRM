import { LuUsers, LuUserRoundCheck } from "react-icons/lu";
import { FaArrowUp, FaArrowDown, FaDesktop } from "react-icons/fa";

export default function Dashbooking({ text, profit = false, num, percentage }) {
  // Determine the icon based on `text`
  const getIcon = () => {
    if (text === "Flight Bookings") return <LuUsers />;
    if (text === "Hotel Packages") return <FaDesktop />;
    return <LuUserRoundCheck />;
  };
  const images = [
    "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg",
"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg",
"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
"https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg"
  ]

  return (
    <div className="flex items-center gap-4 rounded-xl p-4 w-full  transition-all duration-300 cursor-pointer">
      {/* Icon */}
      <div className="p-4 rounded-full bg-[#D3FFE7] text-[var(--green-text-color)] text-4xl">
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-sm  text-[var(--secondary-text-color)]">
          {text}
        </span>
        <strong className="text-2xl text-[var(--primary-color)]">{num}</strong>

      {text === "Hotel Packages" ? 
      <div className="flex items-center">
{images.map((item,index)=>{
    return(
       
            <img src={item} key={index} className="w-5 h-5 rounded-full"/>
     
    )
})}
        </div>
      : <div className="flex items-center gap-2 text-sm">
          {profit ? (
            <FaArrowUp className="text-[var(--green-text-color)]" />
          ) : (
            <FaArrowDown className="text-[var(--red-text-color)]" />
          )}
          <span
            className={`font-medium ${
              profit ? "text-[var(--green-text-color)]" : "text-[var(--red-text-color)]"
            }`}
          >
            {percentage}%
          </span>
          <span className="text-black">this month</span>
        </div>}
      </div>
    </div>
  );
}
