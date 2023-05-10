import React from 'react'

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
        setIsShowForm((isShowForm)=>!isShowForm)
    }
  return (
    <header className='sticky flex justify-between items-center bg-slate-500 py-2 px-4 top-0 mb-10 shadow-2xl gap-4'>
        <h1 className='text-2xl font-semibold text-white'>Usuarios</h1>
        <button onClick={handleClickShowModal} className='bg-purple-p text-white p-1 hover:bg-purple-p/90 transition-colors rounded-md border-2 border-gray-300' ><i className='bx bx-plus'></i> Crear nuevo usuario</button>
    </header>
  )
}

export default Header