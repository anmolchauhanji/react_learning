import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  
  return (
    <div className='flex justify-center items-center h-[5vh]'>
      <h1>User ID: {userid}</h1>
    </div>
  )
}

export default User