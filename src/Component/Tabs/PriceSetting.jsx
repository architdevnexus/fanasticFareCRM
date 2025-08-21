import React from "react";

const PriceSettings = () => {
  return (
    <div className="p-6 flex flex-col md:flex-row gap-8 items-start justify-center w-full">
      {/* Set Date-wise Price */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-center items-center">
          <h2
            className="w-[300px] text-center border border-[var(--primary-color)] text-[var(--primary-color)] py-2 rounded-md text-lg font-semibold mb-4 
    hover:bg-[var(--primary-color)] hover:text-white 
    active:bg-[var(--primary-color)] active:text-white 
    transition duration-200 cursor-pointer"
          >
            Set Date-wise Price
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Base Price */}
          <div>
            <label className="block text-sm font-medium">
              Base Price (Per Night)
            </label>
            <div className="flex mt-1">
              <span className="bg-[var(--primary-color)] text-white p-2 rounded-l-md">
                ₹
              </span>
              <input
                type="number"
                defaultValue="3500"
                className="w-full p-2 border border-gray-300 rounded-r-md"
              />
            </div>
          </div>

          {/* Max Occupancy */}
          <div className="flex gap-6 justify-center items-center">
            <label className="block text-sm font-medium text-center mt-3">
              Max Occupancy
            </label>
            <input
              type="number"
              defaultValue="2"
              className="w-[60px] mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Extra per person */}
          <div className="flex gap-2 justify-center items-center">
            <label className="block text-sm font-medium text-center mt-2">
              Extra (per person)
            </label>
            <input
              type="number"
              defaultValue="800"
              className="w-[60px] mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* GST */}
          <div className="flex gap-6 justify-center items-center">
            <label className="block text-sm font-medium text-center mt-2">
              GST %
            </label>
            <input
              type="number"
              defaultValue="18"
              className="w-[60px] mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h2 className=" w-[100px] text-center items-center mt-6 bg-[var(--primary-color)] hover:bg-[#0051a8] text-white py-2 rounded-md text-lg font-semibold mb-4">
            Set Price
          </h2>
        </div>
      </div>

      {/* Set Week-wise Price */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-center items-center">
          <h2
            className="w-[300px] text-center border border-[var(--primary-color)] text-[var(--primary-color)] py-2 rounded-md text-lg font-semibold mb-4 
    hover:bg-[var(--primary-color)] hover:text-white 
    active:bg-[var(--primary-color)] active:text-white 
    transition duration-200 cursor-pointer"
          >
            Set Week-wise Price
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div key={day}>
              <label className="block text-sm font-medium">{day}</label>
              <div className="flex mt-1">
                <span className="bg-gray-200 text-black p-2 rounded-l-md">
                  ₹
                </span>
                <input
                  type="number"
                  defaultValue="3500"
                  className="w-full p-2 border border-gray-300 rounded-r-md"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <h2 className=" w-[100px] text-center items-center mt-6 bg-[var(--primary-color)] hover:bg-[#0051a8] text-white py-2 rounded-md text-lg font-semibold mb-4">
            Set Price
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PriceSettings;
