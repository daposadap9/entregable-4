import React from 'react'

const Alert = ({user, deleteUser, handleClickActivateModal}) => {
  return (
    <div className='bg fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex
    justify-center items-center z-50 transition-opacity'>
    <div className="relative bg-white p-4 rounded-md shadow-md">
      <button
        className="absolute top-0 right-1 text-gray-400 hover:text-gray-600"
      >
        <i className="bx bx-x text-2xl" onClick={handleClickActivateModal}></i>
      </button>
      <p className="text-center mb-4 mt-4">¿Estás seguro que deseas eliminar este usuario?</p>
      <div className="flex justify-around">
        <button
          className="bg-red-500 text-white border border-white py-2 px-4 rounded-md hover:bg-red-600"
        onClick={() => deleteUser(user.id)}>
          Confirmar
        </button>
        <button
          className="bg-gray-300 text-black border border-black py-2 px-4 rounded-md hover:bg-gray-400" onClick={handleClickActivateModal}
        >
          Cancelar
        </button>
      </div>
    </div>
    </div>
  )
}

export default Alert