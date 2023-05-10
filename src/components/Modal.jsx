import React from 'react'

const Modal = ({isShowForm, setIsShowForm, handleSubmit, register, submit, reset, setIsUserToEdit, isUserToEdit, errors}) => {
    
const handleClickCloseModal = () => {
    setIsShowForm((isShowForm)=> !isShowForm);
    reset({

        first_name: "",
      
        last_name: "",
      
        email: "",
      
        password: "",
      
        birthday: "",
      
        image_url: "",
      
      })
      setIsUserToEdit()
      
}
  return (
    <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex rounded-md
    justify-center items-center z-50 transition-opacity ${isShowForm?"opacity-100 visible":
    "opacity-0 invisible"}`}>
        <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 w-[300px] relative'>
            <h3 className='text-2xl font-semibold'>{isUserToEdit ? "Editar usuario" :"Nuevo usuario"}</h3>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="first_name">Nombre<span className='text-red-500'>*</span></label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="text" name="first_name" id="first_name" 
                {...register("first_name",{
                    required:"El campo Nombre es obligatorio",
                    pattern: {
                        value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/,
                        message: "Porfavor ingrese un nombre correcto"
                    }
                })}/>
                <span className='text-red-600 font-semibold'>{errors.first_name && errors.first_name.message}</span>
            </div>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="last_name">Apellido<span className='text-red-500'>*</span></label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="text" name="last_name" id="last_name" 
                {...register("last_name",{
                    required:"El campo Apellido es obligatorio",
                    pattern: {
                        value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/,
                        message: "Porfavor ingrese un apellido correcto"
                    }
                }
                )}/>
                <span className='text-red-600 font-semibold'>{errors.last_name && errors.last_name.message}</span>
            </div>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="email">Correo<span className='text-red-500'>*</span></label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="email" name="email" id="email" 
                {...register("email",{
                    required:"El campo Correo es obligatorio",
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/,
                        message: "Porfavor ingrese un correo correcto"
                    }
                })}/>
                <span className='text-red-600 font-semibold'>{errors.email && errors.email.message}</span>
            </div>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="password">Contraseña<span className='text-red-500'>*</span></label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="password" name="password" id="password" 
                {...register("password",{
                    required:"El campo Contraseña es obligatorio",
                    pattern:{
                        value: /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*])\S{10,}$/,
                        message: "Porfavor ingrese una contraseña que minimo tenga 10 caracteres, que empiece con mayuscula y que minimo tenga un numero o caracter especial"
                    }
                })}/>
                <span className='text-red-600 font-semibold'>{errors.password && errors.password.message}</span>
            </div>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="birthday">Cumpleaños</label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="date" name="birthday" id="birthday" 
                {...register("birthday")}/>
            </div>
            <div className='grid gap-1'>
                <label className='text-xs font-semibold' htmlFor="image_url">URL imagen</label>
                <input className='border-[1px] rounded-sm bg-gray-100 p-1' type="text" name="image_url" id="image_url" 
                {...register("image_url",
                {
                    pattern: {
                        value: /^https?:\/\/.*/,
                        message: "El formato de URL para imagenes es invalido"
                    }
                })}/>
                <span className='text-red-600 font-semibold'>{errors.image_url && errors.image_url.message}</span>
            </div>
            <i onClick={handleClickCloseModal} className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
            <button className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors'>
                {isUserToEdit ? "Guardar Cambios" : "Agregar nuevo usuario"}
            </button>
        </form>
    </section>
  )
}

export default Modal