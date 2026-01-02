
import React, { useState } from 'react'
import RoundButton from './RoundButton';

function DashCard({headline ="DashCard" , sudject = "what is this" }) {

  const [coun, setcount] = useState(0)
  console.log(coun)
  const addcount = () =>setcount(coun + 1)
  const delcount = () => {
    if(coun > 0){
      setcount(coun - 1)
    }else{ setcount(coun = 0)
  } }
  return (
    <div className='bg-[#2F3366] pt-5 w-70 h-80 border-2 border-[#6E73A8] rounded-xl text-2xl'>
      {headline}
      <div className='mt-15 text-6xl'>{coun}
        </div>
        <div className='mt-3 text-xl'>{sudject}</div>

        <div className='mt-4 text-xl flex justify-center items-center  gap-20'>
          
          <RoundButton sign={"+"} fun={addcount} color={"!bg-[#38E38A]"}/> 
          <RoundButton sign={"-"} fun={delcount} color={"!bg-[#FF4F4F]"}/></div>
        </div>
  )
}

export default DashCard