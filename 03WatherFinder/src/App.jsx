import './App.css'
import InputBox from './Components/InputBox'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div
        className="
          w-full max-w-[500px] h-[550px]
          bg-white pt-10 rounded-3xl
          text-[#111827] text-2xl
          text-left p-6
        "
      >
        Weather Collector
        <InputBox />
      </div>
    </div>
  )
}

export default App
