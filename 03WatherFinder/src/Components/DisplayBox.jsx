import React from 'react'

function DisplayBox({ temprature, parameter, city = "city name" }) {
  return (
    <div className="w-full max-w-xs bg-white mt-2 rounded-xl p-4 shadow-xl text-center">
      <div className="text-3xl sm:text-4xl font-semibold">

        {temprature}{parameter}
      </div>

      <div className="text-sm sm:text-lg text-gray-500 mt-1">
        {city}
      </div>
    </div>
  )
}

export default DisplayBox
