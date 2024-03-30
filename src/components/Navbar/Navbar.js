import React from 'react'
import c1 from './c1.png'

import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-[#fdf7eb] rounded-b-3xl  shadow-xl h-[80px] sticky top-0 z-20 ">
      <div className="flex m-auto font-bold ">
        <Link className="navbar-brand mt-3 text-4xl" to="/">Cultural</Link>
        <img src={c1} alt="" className='w-[60px] m-0 p-0'></img> 
        <Link className='navbar-brand mt-3 text-[#ff3b30] text-4xl' to="/">connecT</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
