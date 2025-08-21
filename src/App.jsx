import "./App.css";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./Component/Navbar";

// Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard";
import FlightBooking from "./Pages/Flight/FlightBooking";
import HotelBooking from "./Pages/Hotel/HotelBooking";
import HolidayPack from "./Pages/Holiday/HolidayPack";

// Extranet
import FlightExtranet from "./Pages/Extranet/FlightExtranet/FlightExtranet";
import HotelExtranet from "./Pages/Extranet/HotelExtranet/HotelExtranet";

// MEssages
import MessagesPage from "./Pages/Messages/MessagesPage";

// customer review

import CustomerReview from "./Pages/CustomerReview/CustomerReview";
import SettingPage from "./Pages/Settings/SettingPage";
import { Markup } from "./Pages/Markup/Markup";
import { OfferManagement } from "./Pages/OfferManagement/OfferManagement";
import { QueryManagementPage } from "./Pages/QueryManagement/QueryManagementPage";
import { BlogManagementPage } from "./Pages/BlogManagementPage/BlogManagementPage";
import { SalesReportPage } from "./Pages/SalesReportManagementPage/SalesReportPage";
import { SliderManagementPage } from "./Pages/SliderManagement/SliderManagementPage";
import { FlightManagementPage } from "./Pages/FlightSettingManagement/FlightManagementPage";
import { DailySalesReport } from "./Pages/DailySalesReport/HolidayPackageSalesReport";
import { FlightSalesReportManagement } from "./Component/FlightSalesReportManagement";
import { HotelSalesReport } from "./Pages/DailySalesReport/HotelSalesReport";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-container flex">
        {/* Navbar fixed and controlled */}
        <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        <main
          className={`main-content bg-[#FAFBFF] rounded-tl-4xl ml-2 flex-1 min-h-screen transition-all duration-300 ${
            isCollapsed ? "ml-32" : "ml-72"
          }`}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/flight" element={<FlightBooking />} />
            <Route path="/hotel" element={<HotelBooking />} />
            <Route path="/holiday" element={<HolidayPack />} />
            <Route path="/flightExtranet" element={<FlightExtranet />} />
            <Route path="/hotelExtranet" element={<HotelExtranet />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/reviews" element={<CustomerReview />} />
            <Route path="/markup" element={<Markup />} />
            <Route path="/offermanagement" element={<OfferManagement />} />
            <Route path="/querymanagement" element={<QueryManagementPage />} />
            <Route path="/blogmanagement" element={<BlogManagementPage />} />
            <Route path="/salesreportmanagement" element={<SalesReportPage />} />
            <Route path="/holidayreportmanagement/holiday" element={<DailySalesReport />} />
            <Route path="/flightreportmanagement/flight" element={<FlightSalesReportManagement />} />
            <Route path="/hotelreportmanagement/hotel" element={<HotelSalesReport />} />


            <Route path="/slidermanagement" element={<SliderManagementPage />} />
            <Route path="/flightmanagement" element={<FlightManagementPage />} />

            <Route path="/settings" element={<SettingPage />} />

            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
