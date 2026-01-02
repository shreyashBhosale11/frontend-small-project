import React, { useState } from 'react'

function Button({value, border= "!border-[#6E73A8]" , color= "text-pink-200" , fun}) {
  
  
  return (
    <>
    <div className='m-0 p-0 text-2xl '>
    <button className= {`!bg-[#2F3366]  !border-3 ${border} !rounded-full ${color} `}
     onClick={fun}>
      {value}
    </button>
    </div>  </>)
}

export default Button