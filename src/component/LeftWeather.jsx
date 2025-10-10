import React from 'react';
import Background from '../assets/images/bg-today-large.svg'

function LeftWeather() {
  return (
    <div className='w-[65%] flex flex-col pl-[100px] bg-[#03012dff] h-full'>
      <div
        className="bg-[white] w-[80%] rounded-[10px] h-[40vh] bg-cover bg-center" 
        
    style={{backgroundImage={Background}}}// Replace with your path
      ></div>
    </div>
  );
}

export default LeftWeather;
