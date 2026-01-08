import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Components/InputBox'

function demo() {
  // const [data, setdata] = useState([])
  // const [city, setcity] = useState([])

//   useEffect(()=>{
//     fetch("https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true"
// ).then(res => res.json())
//   .then(res => setdata(res))
//   console.log(data)

//   fetch("https://geocoding-api.open-meteo.com/v1/search?name=Mumbai")
//   .then(res => res.json())
//   .then(res => setcity(res))
    
  

//   },[])

  return (
    <>
      <InputBox></InputBox>
   <div>Weather project</div>

    {/* {data.current_weather && (
      <p>Temperature: {data.current_weather.temperature} °C</p>
    )}

    {city.results[0] && (
      <p>latitude: {city.results[0].latitude
    } <br></br>
    latitude: {city.results[0].longitude}</p>
    )} */}

    </>
  )
}

export default demo
