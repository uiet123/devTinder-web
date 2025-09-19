import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store => store.user))
  return (
    <div className="bg-gray-400 p-6 flex justify-between items-center">
      <div className="logo text-red-200 text-2xl font-bold">DevTinder</div>
      {user && <div className="flex justify-center items-center gap-4">
        <p className="text-md font-semibold text-white">Welcome, {user.firstName}</p>
        <img height={50} width={50} src={user.photoUrl} alt="" />
      </div>}
    </div>
  );
};

export default Navbar;
