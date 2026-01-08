import React from 'react'

function DisplayBox({temprature , parameter ,city = "city name"}) {
  return (
    <div>
      <div className='w-[200px] h-[100px] bg-[#FFFFFF] mt-2 rounded-xl p-4
      text-4xl  shadow-xl'>
        {temprature} {parameter}
        <div className='text-lg pl-1.5 text-[#6B7280]'>{city}</div>


      </div>


    </div>
  )
}

export default DisplayBox