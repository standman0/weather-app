import React from 'react'
import logo from '../assets/images/logo.svg' // Update this path as needed

export default function Header() {
  return (
    <header className="flex items-center justify-between pl-[30px] pr-[30px] bg-[#03012dff] h-[80px]">
      <img src={logo} alt="App Logo" className="h-10" />

      <select
        name="location"
        id="location-select"
        className="bg-[#aeaeb7ff] text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Location</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="portharcourt">Port Harcourt</option>
      </select>
    </header>
  )
}
