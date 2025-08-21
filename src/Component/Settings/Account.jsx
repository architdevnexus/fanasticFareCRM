import React from 'react';

const SettingAccount = () => {
  return (
    <div className="p-10 bg-gray-50 text-sm">
      <h2 className="text-xl font-semibold mb-6 text-[#A3A3A3]">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Account Settings */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value="Vishal"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium invisible">Last Name</label>
              <input
                type="text"
                value="Gulati"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value="vishalgulati@fantasticfare.in"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="text"
                value="+91 9999999998"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                value="********"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Business Settings */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Business Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Business Name</label>
              <input
                type="text"
                value="Fantastic Fare"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value="contactus@fantasticfare.in"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="text"
                value="+124 234566"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Language</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingAccount;
