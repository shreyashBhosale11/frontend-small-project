import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import DashCard from './components/DashCard'

function App() {
  const [colorbg, setColotbg] = useState("#0B0F2E")
  const changfirst = () =>setColotbg("#0B0F2E")
  const changSecond = () =>setColotbg("#24103F")
  const changThird = () =>setColotbg("#0E2F26")
  const changForth = () =>setColotbg("#2E1C0B")


  return (
    <>
    <div className='text-4xl w-screen h-screen bg-slate-900 text-white
    pt-11 text-center'style={{background : colorbg}} > Interactiv dashboard
      <div className='p-3  mt-5 w-auto bg-slate-900 flex justify-center items-center gap-5'style={{background : colorbg}}>
        <Button
        value={"blue"}
        fun={changfirst}
        
        
       ></Button>
       <Button
       value={"purple"}
       fun={changSecond}/>

       <Button
       value={"green"}
       fun={changThird}/>
       <Button
       value={"amber"}
       fun={changForth}/>

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
