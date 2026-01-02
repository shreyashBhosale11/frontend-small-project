import React from 'react'

function RoundButton({sign,fun}) {
  return (
    <div><button className='!rounded-full !bg-amber-600 text-black'
    onClick={fun}>{sign}</button></div>
  )
}

export default RoundButton