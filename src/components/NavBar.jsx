import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/UserSlice'

const NavBar = () => {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL+"/logout",{},{
        withCredentials:true
      })
      dispatch(removeUser())
      navigate("/login")
    }catch(err){
      console.log(err.mesaage)
    }
      
  }
  return (
    <div className="navbar bg-base-200 shadow-sm">
    <div className="flex-1">
      <Link to="/feed" className="btn btn-ghost text-xl">DevHub🧑‍💻</Link>
    </div>
    {user &&
    <div className="flex gap-2">
      <p className='px-4 py-2'>welcome,{user.firstName} </p>
    <div className="dropdown dropdown-end mx-4">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?user.photoUrl:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">connections</Link></li>
        <li><Link to="/requests">requests</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>}
    
  </div>
  )
}

export default NavBar