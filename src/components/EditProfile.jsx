import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [field, setField] = useState({
     firstName: user.firstName || "",
  lastName: user.lastName || "",
  photoUrl: user.photoUrl || "",
  age: user.age || "",
  gender: user.gender || "",
  about: user.about || "",
  error: "",
  save: false
  });
useEffect(() => {
  const int = setTimeout(() => {
    setField({ ...field, save: false });
  }, 3000);

  return () => clearTimeout(int);
}, [field.save]);

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName: field.firstName,
          lastName: field.lastName,
          photoUrl: field.photoUrl,
          age: field.age,
          gender: field.gender,
          about: field.about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data))
      setField({...field, save: true})
    } catch (err) {
      setField({ ...field, error: err.message });
    }
  };
  return (
    <div className="flex justify-center items-center mt-10 mb-20 gap-8 relative">
      <div>
        <div className="bg-gray-500 flex flex-col p-3 items-center w-80 h-135 rounded-lg">
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">First Name</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="text"
              value={field.firstName}
              onChange={(e) =>
                setField({ ...field, firstName: e.target.value })
              }
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">Last Name</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="text"
              value={field.lastName}
              onChange={(e) => setField({ ...field, lastName: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">PhotoUrl</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="text"
              value={field.photoUrl}
              onChange={(e) => setField({ ...field, photoUrl: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">Age</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="number"
              value={field.age}
              onChange={(e) => setField({ ...field, age: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">Gender</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="text"
              value={field.gender}
              onChange={(e) => setField({ ...field, gender: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="text-white">About</label>
            <input
              className="bg-white px-8 py-1 rounded outline-none focus:ring-2 focus:ring-red-200"
              type="text"
              value={field.about}
              onChange={(e) => setField({ ...field, about: e.target.value })}
            />
          </div>

          <button
            className="bg-red-200 px-6 py-1 mt-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <div>
        <div className="bg-gray-500 flex flex-col p-3 items-center w-80 h-135 rounded-lg">
          <img
            className="mb-4"
            height={250}
            width={250}
            src={field.photoUrl}
          ></img>
          <div className="flex flex-col items-start w-full ml-10">
            <h3>{`${field.firstName} ${field.lastName}`}</h3>
            {user.gender && user.age && (
              <p>{`${field.age}, ${field.gender}`}</p>
            )}
            <p>{field.about}</p>
          </div>
        </div>
      </div>
      {field.save && <div className="absolute bg-green-500 shadow-green-400 shadow-lg px-4 py-2 rounded-xl"> Data saved successfully</div>}
    </div>
  );
};

export default EditProfile;
