import { FaRegBell, FaRegUserCircle } from "react-icons/fa";

export default function Dashnav() {
  return (
    <div className="flex  items-center justify-between p-4 w-full">
      {/* Greeting section */}
      <div className="flex flex-col justify-start">
        <span className="font-semibold text-xl text-[var(--primary-color)]">
          Hello, Vishal Gulati!
        </span>
        <span className="text-[var(--secondary-text-color)] text-sm">
          Here’s your overview of your business!
        </span>
      </div>

      {/* Actions section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative group">
          <div className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-full cursor-pointer">
            <FaRegBell className="text-[var(--primary-color)] text-xl" />
          </div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
        </div>

        {/* Divider */}
        <div className="w-[1px] h-8 bg-gray-300"></div>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200 px-3 py-2 rounded-md">
          <FaRegUserCircle className="text-4xl text-[var(--primary-color)]" />
          <div className="flex flex-col items-start">
            <span className="font-semibold text-black leading-tight">
              Vishal Gulati
            </span>
            <span className="text-[var(--secondary-text-color)] text-sm leading-tight">
              vishalgulati@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
