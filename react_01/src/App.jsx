import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  const addvalue = () => {
    setCounter(counter + 1)
  }
  const removevalue = () => {
    if (counter>0) {
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
  <h1>chai or react</h1>
  <h2 >counter value : {counter}</h2>
  <button onClick={addvalue}>add value</button>
  <br />
  <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
