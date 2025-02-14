import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export const Github = () => {
  const data = useLoaderData()
  // const [data, setdata] = useState({})
  // useEffect(() => {
  //   fetch('https://api.github.com/users/anmolchauhanji')
  //   .then((res) => res.json())
  //   .then(data=>{ 
  //     console.log(data)
  //   setdata(data);})
  //   }
  // , [])
  return (
    <div className=' text-center m-4 p-4 text-3xl'>
    
    
    username : {data.name}
    <br />
    public repo: {data.public_repos}
    <br />
    photo :  <img src="https://avatars.githubusercontent.com/u/170080499?v=4" alt="" className='h-[25vh]  w-[15vw]' />
   
    </div>
  )
}

export const loader = async () => {
  const response = await fetch('https://api.github.com/users/anmolchauhanji')
  return response.json()
}