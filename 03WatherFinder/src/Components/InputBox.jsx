import React, { useEffect, useState } from 'react'
import DisplayBox from './DisplayBox'

function InputBox() {
  const [city, setcity] = useState("")
  const [latitude, setlatitude] = useState(null)
  const [longitude, setlongitude] = useState(null)
  const [error, SetError] = useState("")
  const [loading, setLoading] = useState(false)
  const [tempCelcious, setTemCelcious] = useState(0)
  const [tempFared, setTemFared] = useState(0)

  const findTemprature = async (latitude, longitude) => {
    try {
      setLoading(true)
      const temRespons = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
      const tempData = await temRespons.json()

      if (!tempData.current_weather) {
        SetError("Weather data not available")
        return
      }

      const tempC = tempData.current_weather.temperature
      setTemCelcious(tempC)
      setTemFared((tempC * 9) / 5 + 32)
    } catch {
      SetError("Weather data not available")
    } finally {
      setLoading(false)
    }
  }

  const citylaglactitudeApi = async () => {
    try {
      setLoading(true)
      SetError("")
      setTemCelcious(0)
      setTemFared(0)

      const respons = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      )
      const cityData = await respons.json()

      if (!cityData.results || cityData.results.length === 0) {
        SetError("City not found")
        return
      }

      setlatitude(cityData.results[0].latitude)
      setlongitude(cityData.results[0].longitude)
    } catch {
      SetError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!city.trim()) {
      SetError("Please enter a city name")
      return
    }
    citylaglactitudeApi()
  }

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      findTemprature(latitude, longitude)
    }
  }, [latitude, longitude])

  return (
    <div className="mt-4">
      <div className="bg-gray-100 rounded-2xl p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="text-sm font-medium">Enter City Name</label>

          <input
            className="bg-white w-full text-base p-2 rounded-md border border-gray-300"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-sm mt-2 min-h-[24px]">
        {loading && <p>Loading data...</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        <DisplayBox temprature={tempCelcious} parameter="C" city={city} />
        <DisplayBox temprature={tempFared} parameter="F" city={city} />
      </div>
    </div>
  )
}

export default InputBox
