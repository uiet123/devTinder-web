import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
    const dispatch = useDispatch()
    const userFeed = useSelector(store => store.feed) 
    const getFeed = async () => {
        if(userFeed) return 
        try{
            const res = await axios.get(BASE_URL + "/user/feed", {
                withCredentials: true
            })
            dispatch(addFeed(res.data))
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        getFeed()
    },[])
  return (
    userFeed && <div className='flex justify-center mt-20'><UserCard user = {userFeed[0]} /></div>
  )
}

export default Feed