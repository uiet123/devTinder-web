import React from "react";
import profile from "../../assets/assets.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-6 flex justify-between items-center">
      <div className="logo text-red-200 text-2xl font-bold">DevTinder</div>
      <div className="flex">
        <input
          className="bg-white rounded-2xl outline-none focus:ring-2 focus:ring-red-200 mr-4"
          type="text"
        />
        <img height={50} width={50} src={profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
