import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import MacBook from './components/MacBook'
import Home from './components/Home'
import Iphone from './components/Iphone'
import Ipad from './components/Ipad'
import Airpods from './components/Airpods'
import logo from "./assets/logo.svg"
import logos from "./assets/logos.svg"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className='flex justify-around items-center text-[#B5B5B5] bg-[#212121ED] p-[20px]'>
          <NavLink className={({ isActive }) =>
            isActive
              ? " drop-shadow-[0_0_10px_#00ffff] transition-all"
              : "text-[#B5B5B5] transition-all"
          } to="/"><img src={logo} alt="" /></NavLink >
          <NavLink className={({ isActive }) =>
            isActive
              ? " drop-shadow-[0_0_10px_#00ffff] transition-all"
              : "text-[#B5B5B5] transition-all"
          } to="/MacBook">MacBook</NavLink >
          <NavLink className={({ isActive }) =>
            isActive
              ? " drop-shadow-[0_0_10px_#00ffff] transition-all"
              : "text-[#B5B5B5] transition-all"
          } to="/Iphone">iPhone</NavLink >
          <NavLink className={({ isActive }) =>
            isActive
              ? " drop-shadow-[0_0_10px_#00ffff] transition-all"
              : "text-[#B5B5B5] transition-all"
          } to="/Ipad">iPad</NavLink >
          <NavLink className={({ isActive }) =>
            isActive
              ? " drop-shadow-[0_0_10px_#00ffff] transition-all"
              : "text-[#B5B5B5] transition-all"
          } to="/Airpods">AirPods</NavLink >
          <img src={logos} alt="" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MacBook" element={<MacBook />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Airpods" element={<Airpods />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App