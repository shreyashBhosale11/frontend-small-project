import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import DashCard from './components/DashCard'

function App() {
  const [colorbg, setColotbg] = useState("black")

  return (
    <>
    <div className='text-4xl w-screen h-screen bg-slate-900 text-white
    pt-11 text-center' > Interactiv dashboard
      <div className='p-3  mt-5 w-auto bg-slate-900 flex justify-center gap-5'>
        <Button
        value={"blue"}
       ></Button>
       <Button
       value={"red"}/>
       <Button
       value={"ovil"}/>
       </div>
       

       <div className='flex justify-center items-center gap-8
       mt-10'>
        <DashCard
        headline='Step Traker'
        sudject='Steps today'/>
        
        <DashCard
        headline='Social Status'
        sudject='Likes'/>

        <DashCard
        headline='Project Traks'
        sudject='Completed'/>
        </div>
    
    </div>
    </>
  )
}

export default App
