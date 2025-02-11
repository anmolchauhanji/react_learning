import React, { useCallback, useEffect,useRef } from 'react'
import { useState } from 'react'
import './App.css'
function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("");
  const generatePassword=useCallback(()=>{
    let  pass="";
    let str ="ABCDEFGHIJKLMNOPQRSTYWXYZabcdefghijklmnopqrstywxyz"
    if(number) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()+=";
    for  (let i =0;i<length;i++){
     pass+=str.charAt(Math.floor(Math.random()*str.length));
    }
    setpassword(pass);
  },[length,number,charAllowed,setpassword])
  useEffect(()=>{
    generatePassword();
  },[length,number,charAllowed])

  const passwordRef=useRef(null);
  let copy =useCallback(()=>{
    passwordRef.current?.select(password)
    window.navigator.clipboard.writeText(password) 
  
  },[password])
  return (
   <>
   <h1 className='text-4xl text-center mt-[2vh] text-white'>password generator</h1>
   <div className='h-[30vh] w-[60%] flex justify-center items-center bg-white ml-[22vw] mt-[10vh] rounded-2xl'>
   <div><div>
   <input className='bg-yellow-200 text-xl h-[7vh] w-[40vh]' type="text" readOnly='true' placeholder='password' value={password} ref={passwordRef} /> <button className='h-[7vh] w-[10vw] rounded-3xl bg-green-600' onClick={copy}>copy</button>
   <br />
   </div>
    <div>
    <input type="range" min={10} max={100} value={length} 
    className='cursor-pointer'
    onChange={(e)=>setLength(e.target.value)}/>
    <label> Length: {length}</label>
    </div>
    <div>
    <input type="checkbox" onChange={()=>setNumber((prev)=>!prev)} /> 
    <label> number allowed</label>
    </div>
    <div>
    <input type="checkbox" onChange={()=>setcharAllowed((prev)=>!prev)} /> 
    <label> char</label>
    </div></div>
   </div>
   

   </>
  )
}

export default App