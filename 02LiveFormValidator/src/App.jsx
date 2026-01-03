import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [pass, setpass] = useState("")
  const [email, setemail] = useState("")
  const [user , setuser ] = useState("");

  // for radio auto select 
const [userOk, setUserOk] = useState(false);
const [passOk, setPassOk] = useState(false);
const [status , setStats]= useState(true)


  const userChange =(val)=>{setuser(val)}
  const emailChange =(val)=>{setemail(val)}
  const passChange =(val)=>{setpass(val)}

  const liveVlidatation = useCallback(()=>{
  setUserOk(user.length >= 5);
  setPassOk(pass.length >= 8);
  
  },[pass ,  user])

  const emailref = useRef(null)

  const copyEmail = useCallback(()=>{
    emailref.current?.select()
    emailref.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(email)

  },[email])

useEffect(()=>{
  liveVlidatation()
}, [pass ,user,  liveVlidatation])

  





  return (
    < >
    <div className=' flex justify-center'>
  <div className='bg-[#FFFFFF] text-center w-2xl h-[600px] rounded-2xl '>
      <div className='text-4xl pt-6'>Live Form Validator</div>
      <InputBox
      place={"Username"}
      onValueChange={userChange}
      />

       <InputBox
      place={"Email"}
      onValueChange={emailChange}
      ref={emailref}/>

       <InputBox
      place={"password"}
      onValueChange={passChange}
      type={"password"}/>

    <div className='mt-10 flex justify-center gap-30 text-xl'>
    <label>
    <input
      type="radio"
      checked={userOk}
      readOnly
      
    />
     Username valid
    </label>

      
        <label>
      <input
        type="radio"
        checked={passOk}
        readOnly
      />
       Password valid
    </label>
    </div>

      <p
    className={`h-6 text-green-600 transition-opacity
      ${userOk && passOk ? "opacity-100" : "opacity-0"}
    `}
  >
    ✅ Valid
  </p>
    <button disabled={!(userOk && passOk)}
    className='mt-7 !bg-blue-500'
    onClick={copyEmail}>Submit</button>

      


    </div>
    </div>
    
    </>
  )
}

export default App
