import React from 'react'
import logo from './images/logo.png'
import "./index.css"

const Nav = () => {
  return (
    <header className='bg-gray-900 head'>
      <nav className='flex items-center justify-between content-center h-28 p-10 rounded-full'>
        <img src={logo} alt="logo" className='w-10 h-15 bg-white'/>
        <ul className='flex atems-center gap-7'>
          <li className='font-mono navtxt'><span className='text-green-500 '>01.</span>Home</li>
          <li className='font-mono navtxt'><span className='text-green-500 '>02.</span>About</li>
          <li className='font-mono navtxt'><span className='text-green-500 '>03.</span>Projects</li>
          <li className='font-mono navtxt'><span className='text-green-500 '>04.</span>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav