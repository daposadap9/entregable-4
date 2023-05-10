import React, { useState } from 'react'
import Alert from './Alert'

const UserCard = ({user, deleteUser, handleClickEdit}) => {

    const [isActiveModal, setisActiveModal] = useState(false)

    const handleClickActivateModal = () => {
        setisActiveModal(!isActiveModal)
    }

  return (
    <>
    <article className='bg bg-slate-200 p-3 justify-center rounded-md grid gap-3 border-2 border-gray-900'>
        <div>
            <img className='w-[150px] aspect-[4/5] object-cover mx-auto rounded-md shadow-2xl border-2 border-gray-900' src={user.image_url ? user.image_url : "/images/nonProfile.jpeg" } alt="User Image" />
        </div>
        <h3 className='text-2xl text-center font-semibold'>{user.first_name} {user.last_name}</h3>
        <ul className='grid gap-4 border-b-4 pb-5 border-gray-600 px-1 overflow-hidden'>
            <li>
                <h4 className='font-semibold'>Correo:</h4>
                <span>{user.email}</span>
            </li>
            <li>
                <h4 className='font-semibold'>Cumpleaños:</h4>
                <span>
                    <i className='bx bx-gift'></i>
                    {user.birthday}
                </span>
            </li>
        </ul>
        <div className='flex justify-around'> 
            <button onClick={handleClickActivateModal} className='bg-red-500 rounded-md p-1 shadow-lg border-2 border-white hover:opacity-80'>
            <i className='bx bxs-trash text-3xl text-white'></i>
            </button>
            <button onClick={() => handleClickEdit(user)} className='bg-gray-300 rounded-md p-1 shadow-lg border-2 border-gray-500 hover:opacity-80'>
            <i className='bx bx-pencil text-3xl'></i>
            </button>
        </div>
    </article>
    {
        isActiveModal? <Alert user={user} deleteUser={deleteUser} handleClickActivateModal={handleClickActivateModal}/> : ""
    }
    
    </>
  )
}

export default UserCard