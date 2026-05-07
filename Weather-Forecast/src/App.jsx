import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-300 w-full h-screen py-[2em]'>
      <div className='w-[40%] h-[80vh] bg-blue-400 mx-auto rounded-md text-center text-amber-50 p-[1.5%] text-2xl font-semibold'>
          Enter Location
      </div>
    </div>
      
    </>
  )
}

export default App
