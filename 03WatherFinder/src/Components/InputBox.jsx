import React, { useEffect, useState } from 'react'
import DisplayBox from './DisplayBox'

function InputBox() {
    const [city , setcity] = useState("")
    const [latitude ,setlatitude] = useState(null)
    const [longitude , setlongitude] = useState(null)
    const [error , SetError] = useState("")
    const [loading , setLoading] = useState(false);
    const [tempCelcious, setTemCelcious] = useState(0);
    const [tempFared, setTemFared] = useState(0);


    const findTemprature = async (latitude , longitude) =>{
      try{
        setLoading(true);
      
      const temRespons = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
      const tempData = await temRespons.json();
      if(!tempData.current_weather ){
        SetError("Weather data not available")
        return
      }
      const tempC = tempData.current_weather.temperature
      setTemCelcious(tempC)

      const tempF = (tempC * 9)/5 + 32
      setTemFared(tempF)
    }catch{
      SetError("Weather data not available")
    }finally{
        setLoading(false)
       }
      
    }


    const citylaglactitudeApi = async () =>{
       try{ 
        setLoading(true)
        SetError("")
        setTemCelcious(0)
        setTemFared(0)
        const respons = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
        const cityData = await respons.json();
        if(!cityData.results || cityData.results.length === 0){
          SetError("City not found ")
          setlatitude(null)
          setlongitude(null)
          return
        }
          
    
        setlatitude(cityData.results[0].latitude)
        setlongitude(cityData.results[0].longitude)
        
       }catch(err){
        SetError("Somthing went wrong ")
       }finally{
        setLoading(false)
       }

    }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!city.trim()) {
        SetError("Please enter a city name");
        return;
      }
    citylaglactitudeApi(); 
    console.log(city);
  };

  useEffect(()=>{
    if(latitude !== null && longitude !== null){
      findTemprature(latitude ,longitude)
    }
  }, [latitude, longitude])
    
  return (
    <div >
        <div className='bg-[#F3F4F6] rounded-2xl mt-5 p-3'>
          <form onSubmit={handleSubmit}>
            <label className='text-[0.8rem]'>Enter City Name</label>
            <br />
            <input 
            className='bg-[#FFFFFF] w-full mt-2 text-[1rem] p-2 rounded-l border-1 border-[#D1D5DB]'
            type="text" 
            placeholder='Enter city name'
            value={city}
            onChange={(e) =>{setcity(e.target.value)}}
            
            />
          <br />
          <div className='text-sm pt-3 w-fit  '>
                <button 
                className='!border-1 !border-[#D1D5DB]'
                type="submit"> Search</button>
            </div>
      
      </form>
    </div>

    <div className='text-sm pt-1 h-13 mt-2'>
      {loading &&<p>Loading data...</p>}
      {error  && <p className='text-red-600'>{error}</p>}
    </div>

    <div className='flex justify-center items-center
    gap-10'>
      <DisplayBox 
      temprature={tempCelcious}
      parameter={"c"}
      city={city}/>

      <DisplayBox
      temprature={tempFared}
      parameter={"f"}
      city={city}/>
    </div>

        
    </div>
  )
}

export default InputBox