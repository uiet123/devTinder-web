import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClickLogout = async () => {
    try{
      await axios.post(BASE_URL + "/logout", {} ,{
        withCredentials : true
      })
      dispatch(removeUser())
      return navigate("/login")
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <div className="bg-gray-400 p-6 flex justify-between items-center">
        <Link to="/" className="logo text-red-200 text-2xl font-bold">DevTinder</Link>
        {user && (
          <div className="relative flex justify-center items-center gap-4">
            <p className="text-md font-semibold text-white hidden sm:block">
              Welcome, {user.firstName}
            </p>
            <img
              height={50}
              width={50}
              src={user.photoUrl}
              alt=""
              className="rounded-full cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            {/* Dropdown Menu */}
            {toggle && (
              <div className="absolute right-0 top-14 bg-gray-500 text-white rounded-md shadow-lg w-40 flex flex-col">
                <Link to="/profile" className="px-4 py-2 text-left hover:bg-gray-600">
                  Profile
                </Link>
                <button className="px-4 py-2 text-left hover:bg-gray-600">
                  Settings
                </button>
                <button onClick={handleClickLogout} className="px-4 py-2 text-left hover:bg-gray-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
