
import React, { useState } from 'react'
import RoundButton from './RoundButton';

function DashCard({headline ="DashCard" , sudject = "what is this" }) {

  const [coun, setcount] = useState(0)
  console.log(coun)
  const addcount = () =>setcount(coun + 1)
  const delcount = () => setcount(coun - 1) 
  return (
    <div className='bg-gray-500 pt-5 w-70 h-80 border-1 rounded-xl text-2xl'>
      {headline}
      <div className='mt-15 text-6xl'>{coun}
        </div>
        <div className='mt-3 text-xl'>{sudject}</div>

        <div className='mt-4 text-xl flex justify-center items-center  gap-20'>
          
          <RoundButton sign={"+"} fun={addcount}/> 
          <RoundButton sign={"-"} fun={delcount}/></div>
        </div>
  )
}

export default DashCard