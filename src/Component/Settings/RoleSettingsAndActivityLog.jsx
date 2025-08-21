import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const permissionsList = [
  "Flights",
  "Hotels",
  "Holidays",
  "CRM",
  "Analytics and Report Access",
];

const activityLogs = [
  {
    name: "Vansh Kaushik",
    time: "1:50 PM",
    action: "Deleted Packages & Updated Flight Timings",
  },
  {
    name: "Manisha Bhardwaj",
    time: "9:10 AM",
    action: "Added New Hotel & Activated Holidays Packages",
  },
  {
    name: "Vishal Gulati",
    time: "6:45 AM",
    action: "Checked Analytics and Previous Week Sales",
  },
  {
    name: "Manisha Bhardwaj",
    time: "9:10 AM",
    action: "Added New Hotel & Activated Holidays Packages",
  },
];

const RoleSettingsAndActivityLog = () => {
  const [permissions, setPermissions] = useState({
    Flights: true,
    Hotels: false,
    Holidays: true,
    CRM: false,
    "Analytics and Report Access": true,
  });

  const togglePermission = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50  justify-center">
      {/* Role Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 w-full ">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Role Settings</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-medium">Name</label>
          <div className="flex gap-2 mt-1">
            <input
              value="Vishal"
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              value="Gulati"
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-medium">Designation</label>
          <input
            value="Super Admin"
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Permissions</p>
          <div className="bg-gray-50 border border-gray-200 rounded-md divide-y">
            {permissionsList.map((perm) => (
              <div key={perm} className="flex items-center justify-between px-4 py-3">
                <span>{perm}</span>
                <button
                  onClick={() => togglePermission(perm)}
                  role="switch"
                  aria-checked={permissions[perm]}
                  className={`${
                    permissions[perm] ? "bg-[#434343]" : "bg-gray-300"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none`}
                >
                  <span
                    className={`${
                      permissions[perm] ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Activity Log</h2>
        <div className="flex flex-col divide-y">
          {activityLogs.map((log, index) => (
            <div key={index} className="flex items-start justify-between py-4">
              <div className="flex gap-3">
                <FaUserCircle className="text-2xl text-gray-700" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{log.name}</p>
                  <p className="text-sm text-gray-500">{log.action}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSettingsAndActivityLog;
