import './App.css'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Navbar
import Navbar from './Component/Navbar'


// Dashboard
import Dashboard from './Pages/Dashboard/Dashboard'
import FlightBooking from './Pages/Flight/FlightBooking'
import HotelBooking from './Pages/Hotel/HotelBooking'
import HolidayPack from './Pages/Holiday/HolidayPack'

// Extranet 
import FlightExtranet from "./Pages/Extranet/FlightExtranet/FlightExtranet";
import HotelExtranet from './Pages/Extranet/HotelExtranet/HotelExtranet';

// MEssages
import MessagesPage from './Pages/Messages/MessagesPage';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)

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
            <Route path ="/flight" element={<FlightBooking/>}/>
            <Route path='/hotel' element={<HotelBooking/>}/>
            <Route path='/holiday' element={<HolidayPack/>}/>
            <Route path='/flightExtranet' element={<FlightExtranet/>}/>
            <Route path="/hotelExtranet" element={<HotelExtranet/>}/>
            <Route path='/messages' element={<MessagesPage/>}/>

            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
