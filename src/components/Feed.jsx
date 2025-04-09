import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed=useSelector((store)=>store.feed)
  // console.log(feed)
  const dispath=useDispatch()
  const getFeed= async()=>{
    if(feed)return;
    try{
      const res=await axios.get(BASE_URL+"/feed",{
        withCredentials:true
      })
      
      dispath(addFeed(res.data))
    }catch(err){
      //
    }
  }
  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div><UserCard user={feed[0]}/></div>
  )
}

export default Feed