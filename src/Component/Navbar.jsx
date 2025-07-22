import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CiLogout, CiSearch } from "react-icons/ci";
import {
  MdDashboard,
  MdOutlineCancelScheduleSend,
  MdReviews,
  MdOutlineSettings,
  MdAddCall,
  MdHotel,
  MdOutlineFlight,
} from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export default function Navbar({isCollapsed = false, setIsCollapsed}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const expanded = {};
    [...mainmenu, ...setting].forEach((menu, index) => {
      if (menu.submenu?.some((sub) => sub.path === location.pathname)) {
        expanded[index] = true;
      }
    });
    setOpenMenus(expanded);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const mainmenu = [
    {
      icon: <MdDashboard />, label: "Dashboard", path: "/dashboard",
      submenu: [{ icon: <MdDashboard />, label: "Dashboard 1", path: "/dashboard/overview" }]
    },
    {
      icon: <MdOutlineFlight />, label: "Flight Management", path: "/flight",
      submenu: [
        { icon: <MdAddCall />, label: "Flight Booking", path: "/flight/booking" },
        { icon: <MdOutlineCancelScheduleSend />, label: "Flight Schedule", path: "/flight/schedule" },
        { icon: <LuBaggageClaim />, label: "Flight Status", path: "/flight/status" },
      ]
    },
    {
      icon: <MdHotel />, label: "Hotel Management", path: "/hotel",
      submenu: [
        { icon: <MdAddCall />, label: "Hotel Booking", path: "/hotel/booking" },
        { icon: <MdOutlineCancelScheduleSend />, label: "Hotel Schedule", path: "/hotel/schedule" },
        { icon: <LuBaggageClaim />, label: "Hotel Status", path: "/hotel/status" },
      ]
    },
    {
      icon: <MdOutlineCancelScheduleSend />, label: "Holiday Management", path: "/holiday",
      submenu: [
        { icon: <MdAddCall />, label: "Holiday Booking", path: "/holiday/booking" },
        { icon: <MdOutlineCancelScheduleSend />, label: "Holiday Schedule", path: "/holiday/schedule" },
      ]
    },
    {
      icon: <MdOutlineFlight />, label: "Flight Extranet", path: "/flightExtranet",
      submenu: [
        { icon: <MdAddCall />, label: "Flight Booking", path: "/flight-extranet/booking" },
      ]
    },
    {
      icon: <FaHotel />, label: "Hotel Extranet", path: "/hotelExtranet",
      submenu: [
        { icon: <MdAddCall />, label: "Hotel Booking", path: "/hotel-extranet/booking" },
      ]
    },
  ];

  const setting = [
    {
      icon: <BiSolidMessageSquareDetail />, label: "Messages", path: "/messages",
      submenu: [
        { icon: <BiSolidMessageSquareDetail />, label: "Inbox", path: "/messages/inbox" },
        { icon: <MdOutlineCancelScheduleSend />, label: "Sent", path: "/messages/sent" },
      ]
    },
    {
      icon: <MdReviews />, label: "Customer Reviews", path: "/reviews",
      submenu: [
        { icon: <MdReviews />, label: "Customer Review", path: "/reviews/customer" },
      ]
    },
    {
      icon: <MdOutlineSettings />, label: "Settings", path: "/settings" },
    
  ];

  const renderMenu = (menuList, baseIndex = 0) => {
  return (
    <div className="flex flex-col gap-1">
      {menuList
        .map((item, index) => {
          const uniqueIndex = baseIndex + index;

          // Filter submenus based on search
          const filteredSubmenu = item.submenu?.filter((sub) =>
            sub.label.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const matchesMain =
            item.label.toLowerCase().includes(searchTerm.toLowerCase());

          // Show only if main label matches OR any submenu matches
          if (!matchesMain && (!filteredSubmenu || filteredSubmenu.length === 0)) {
            return null;
          }

          const isActive =
            location.pathname === item.path ||
            item.submenu?.some((sub) => sub.path === location.pathname);

          return (
            <div key={uniqueIndex} className="transition-all duration-300">
              <button
                onClick={() =>
                  handleNavigation(item.path)
                }
                className={`flex items-center gap-3 px-3 py-2 w-full text-left hover:bg-white/10 cursor-pointer transition-all duration-200 rounded-md ${
                  isCollapsed ? "justify-center" : "justify-between"
                } ${isActive ? "bg-white text-[var(--primary-color)] rounded-2xl" : "text-white"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  {!isCollapsed && <span onClick={() => handleNavigation()}>{item.label}</span>}
                </div>
                {item.submenu && !isCollapsed && (
                  <span className="text-lg" onClick={ ()=>item.submenu
                    ? toggleSubMenu(uniqueIndex)
                    :null}>
                    {openMenus[uniqueIndex] ? (
                      <IoIosArrowDropup />
                    ) : (
                      <IoIosArrowDropdown />
                    )}
                  </span>
                )}
              </button>

              {item.submenu && !isCollapsed && filteredSubmenu?.length > 0 && (
                <div
                  className={`ml-6 mt-2 transition-all duration-300 overflow-hidden ${
                    openMenus[uniqueIndex]
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {filteredSubmenu.map((sub, i) => {
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <button
                        key={i}
                        onClick={() => handleNavigation(sub.path)}
                        className={`flex items-center gap-2 px-2 py-1 text-sm w-full text-left transition-all duration-200 ${
                          isSubActive
                            ? "bg-white text-[var(--primary-color)] rounded-2xl"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>{sub.icon}</span>
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};


  return (
    <nav
      className={`flex flex-col fixed z-20 left-0 top-0 justify-between h-screen  text-white  transition-all duration-300 ${
        isCollapsed ? "w-32" : "w-72"
      }`}
    >
      <div className={`flex items-center justify-between p-4 ${isCollapsed ? "flex-col gap-3" : "flex"}`}>
        <img src="/logo.svg" alt="logo" className="w-32" />
        <img
          src={isCollapsed ? "/closeTab.svg" : "/closeTab.svg"}
          alt="toggle"
          className="w-6 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      <div className="flex items-center justify-center w-full mb-2">
        {!isCollapsed ? (
          <div className="w-[90%] p-2 gap-3 rounded-md flex items-center justify-center bg-gray-600 text-white">
            <CiSearch /> <input
  type="text"
  placeholder="Search bar"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="outline-none w-full bg-transparent"
/>
          </div>
        ) : (
          <div
            onClick={() => setIsCollapsed(false)}
            className="bg-gray-600 flex cursor-pointer items-center p-3 rounded-md justify-center"
          >
            <CiSearch />
          </div>
        )}
      </div>

      <div className="flex-1 gap-3 mt-2 overflow-y-auto px-2 scrollbar-hide">
        {renderMenu(mainmenu)}
        <hr className="my-4 border-white/30" />
        {renderMenu(setting, 100)}
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-3 m-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
      >
        <CiLogout className="text-xl" />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </nav>
  );
}
