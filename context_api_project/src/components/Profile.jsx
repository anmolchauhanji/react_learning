import React, { useContext } from 'react'
import userContext from '../Context/Usercontext'
import Usercontext from '../Context/Usercontext'
function profile() {
    const {user} =useContext(Usercontext)
if (!user) return <div>please login</div>
return <div>welcome {user.name} </div>
}

export default profile