import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'

function App() {

  return (
    <>
    <div className=' flex justify-center items-center  '>
      <div className='w-[500px] h-[500px] bg-[#FFFFFF] pt-10 rounded-3xl text-[#111827] text-2xl text-left p-6'>
        Weather Collector
        <InputBox/>
      </div>

    </div>
    


    </>
  )
}

export default App
