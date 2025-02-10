import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
     <div className='w-screen h-screen overflow-hidden' 
     style={{ backgroundColor:color }}
     >
      <div id="nav" className='mt-[80vh] ml-[5vw] w-[85vw] h-[10vh] rounded-xl bg-white justify-around items-center flex'>
        <button onClick={()=>{ setColor('red') }} className='w-[5vw] h-[2vw] bg-red-600 rounded-2xl justify-center items-center flex'> red</button>
        <button onClick={()=>{ setColor('blue') }} className='w-[5vw] h-[2vw] bg-blue-600 rounded-2xl justify-center items-center flex'> blue</button>
        <button onClick={()=>{ setColor('green') }} className='w-[5vw] h-[2vw] bg-green-600 rounded-2xl justify-center items-center flex'> green</button>
        <button onClick={()=>{ setColor('yellow') }} className='w-[5vw] h-[2vw] bg-yellow-600 rounded-2xl justify-center items-center flex'> yellow</button>
        <button onClick={()=>{ setColor('pink') }} className='w-[5vw] h-[2vw] bg-pink-600 rounded-2xl justify-center items-center flex'> pink</button>
        <button onClick={()=>{ setColor('black') }} className='w-[5vw] h-[2vw] bg-black rounded-2xl justify-center items-center flex text-white'> black</button>
      </div>
      
     </div>
    </>
  )
}

export default App
