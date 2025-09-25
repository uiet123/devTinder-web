import React from 'react'

const UserCard = ({user}) => {
  return (
        <div className='bg-gray-500 flex w-md justify-center items-center h-100  flex-col rounded-2xl'>
            <img className='mb-4' height={250} width={250} src={user.photoUrl}></img>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            {user.gender && user.age && <p>{`${user.age}, ${user.gender}`}</p>}
            <p>{user.about}</p>
            <div className='flex mt-4 gap-2'>
              <button className='bg-red-400 p-2 rounded-lg'>Ignore</button>
              <button className='bg-green-300 p-2 rounded-lg'>Interested</button>
            </div>
        </div>
  )
}

export default UserCard