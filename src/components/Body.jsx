import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/UserSlice'


const Body = () => {
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const fetchuser=async()=>{
    if(user)return
    try{
      const userData=await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true
      })
      //console.log(userData);
      dispatch(addUser(userData.data))
    }catch(err){
      if(err.status===401){
        navigate("/login")
      }
    }
  }
  useEffect(()=>{
    fetchuser()
  },[])
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body