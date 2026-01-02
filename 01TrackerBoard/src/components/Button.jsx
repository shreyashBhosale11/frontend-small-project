import React, { useState } from 'react'

function Button({value, }) {
  return (
    <>
    <div className='m-0 p-0 text-2xl '>
    <button className='!bg-black border-1 border-amber-400 rounded-full' >
      {value}
    </button>
    </div>  </>)
}

export default Button