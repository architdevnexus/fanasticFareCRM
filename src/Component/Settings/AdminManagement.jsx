import React from "react";
import { FiChevronRight } from "react-icons/fi";

const AdminManagement = () => {
  const admins = [
    {
      name: "Vishal Gulati",
      role: "Super Admin",
      you: true,
      lastLogin: "30 mins ago",
    },
    {
      name: "Vansh Kaushik",
      role: "Admin",
      you: false,
      lastLogin: "1 hour ago",
    },
    {
      name: "Manisha Bhardwaj",
      role: "Admin",
      you: false,
      lastLogin: "2 days ago",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-[93%] ">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Admin Management</h2>

      {/* Table Headers */}
      <div className="grid grid-cols-3 text-sm font-medium text-gray-400 border-b pb-2">
        <div>Name</div>
        <div>Role</div>
        <div className="text-right">Last Login</div>
      </div>

      {/* Admin Rows */}
      {admins.map((admin, index) => (
        <div
          key={index}
          className="grid grid-cols-3 text-sm py-3 border-b last:border-b-0"
        >
          <div className="text-gray-900">{admin.name}</div>
          <div className="text-gray-900 flex items-center gap-1">
            {admin.role}
            {admin.you && <span className="text-xs text-gray-400 ml-1">You</span>}
          </div>
          <div className="text-right text-gray-600">{admin.lastLogin}</div>
        </div>
      ))}

      {/* Footer link */}
      <div className="mt-4 text-sm text-[#388CD5] font-medium flex items-center justify-between cursor-pointer hover:underline">
        <span>Roles & Permissions</span>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default AdminManagement;
