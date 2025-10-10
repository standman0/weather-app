import { SearchCheckIcon } from 'lucide-react'
import React from 'react'

function Search() {
  return (
    <div className='mt-[30px] w-full h-[30vh] flex flex-col items-center'>
      <h1 className='text-[white] text-[60px]'>How's the sky looking today?</h1>
      <div className='relative my-[35px] flex gap-[15px]  w-[600px]'>
        {/* Search icon absolutely positioned inside input container */}
        <SearchCheckIcon 
          size={20} 
          className='absolute ml-[15px] left-3 top-1/2 transform -translate-y-1/2 text-[#f1f1f1]' 
        />
        <input 
          className='rounded-[10px] tracking-widest pl-[40px] w-full py-[14px] bg-[#272541ff] border-none placeholder:text-[#f1f1f1] text-[15px] text-[white]   focus:outline-none focus:ring-2 focus:ring-blue-500' 
          placeholder='Search for a place.....' 
          type="text" 
        />
        <button className='px-[25px] rounded-[8px] bg-[#4455daff] border-none text-[white]'>Search</button>
      </div>
    </div>
  )
}

export default Search
