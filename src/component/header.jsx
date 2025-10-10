import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { Settings, ChevronDown } from 'lucide-react'
import Setting from '../assets/images/icon-units.svg'

export default function Header() {
  const [selected, setSelected] = useState('Units')
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { label: 'Lagos', value: 'lagos' },
    { label: 'Abuja', value: 'abuja' },
    { label: 'Port Harcourt', value: 'portharcourt' },
  ]

  return (
    <header className="flex items-center justify-between pl-[30px] pr-[30px] bg-[#03012dff] h-[80px]">
      <img src={logo} alt="App Logo" className="h-10" />

      <div className="relative inline-block text-left">
      
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-between gap-[5px] border-none bg-[#312f4bff] text-white py-[7px] px-[15px] rounded-[5px] "
        >
           <img src={Setting} className=' w-[20px] h-[18px]' alt="" />
          <span className='text-white text-[19px] font-[500] text-[white]'>{selected}</span>
          <ChevronDown className="w-4 h-4 text-[white]" />
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(option.label)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
