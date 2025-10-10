import { useState } from 'react'
import Header from './component/header'
import Search from './component/search'
import './App.css'
import RightWeather from './component/RightWeather'
import LeftWeather from './component/LeftWeather'

function App() {
 

  return (
    <div className='bg-[#03012dff] h-[100vh] w-full'>
     <Header/>
     <Search/>
     <div className="flex w-full h-[80vh]">
      <LeftWeather/>
      <RightWeather/>
   
     </div>
    </div>
  
 
  )
}

export default App
