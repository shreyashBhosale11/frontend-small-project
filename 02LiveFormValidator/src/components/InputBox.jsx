import React from 'react'
import { useState } from 'react'

function InputBox({place , type = "text" ,onValueChange ,ref}) {
    const [value , setValue ] = useState("");
    // console.log(value);
  return (
    <div className='mt-15 '>
        <input type={type}
        value={value}
        ref={ref}
        className='!border-[#E2E8F0] border-2 w-xl text-center h-12'
        placeholder={place} 
        onChange={(e)=>{setValue(e.target.value)
            onValueChange(e.target.value)
        }}/>
        </div>
  )
}

export default InputBox