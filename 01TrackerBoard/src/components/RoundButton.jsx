import React from 'react'

function RoundButton({sign,fun ,color ="!bg-amber-600"}) {
  return (
    <div><button className={`!rounded-full ${color} text-black'`}
    onClick={fun}>{sign}</button></div>
  )
}

export default RoundButton