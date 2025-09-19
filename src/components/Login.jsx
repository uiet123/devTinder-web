import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
const Login = () => {
  const [emailId, setEmailId] = useState("Prince@gmail.com")
  const [password, setPassword] = useState("Prince@123")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogin = async () => {
    try{
      const res = await axios.post(BASE_URL + "/login",{
        emailId,
        password  
      }, {
        withCredentials: true
      })
      dispatch(addUser(res.data))
      return navigate("/")
    }catch (err){
      console.err(err)
    }
  }
  return (
    <div className='flex justify-center items-center h-100'>
        <div className='bg-gray-500 flex flex-col p-5 items-center w-80 rounded-lg'>
        <h2 className="text-white text-xl font-bold mb-2">Login</h2>
        <div className='p-2 flex flex-col gap-1'>
            <label className="text-white">Email ID</label>
            <input className='bg-white px-8 py-2 rounded outline-none focus:ring-2 focus:ring-red-200' type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </div>
         <div className='p-2 flex flex-col gap-1'>
            <label className="text-white">Password</label>
            <input className='bg-white px-8 py-2 rounded outline-none focus:ring-2 focus:ring-red-200' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='bg-red-200 px-6 py-2 mt-4 rounded' onClick={handleLogin}>Login</button>
        
    </div>
    </div>
    
  )
}

export default Login