import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UsersList from './components/UsersList'

function App() {

  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  const [users, setUsers] = useState([])

  const [isShowForm, setIsShowForm] = useState(false)

  const BASE_URL = "https://users-crud.academlo.tech"

  const [isUserToEdit, setIsUserToEdit] = useState()

  const DEFAULT_VALUES = {

    first_name: "",
  
    last_name: "",
  
    email: "",
  
    password: "",
  
    birthday: "",
  
    image_url: "",
  
  }

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null
    }
    if(!data.image_url){
      data.image_url = null
    }
    if(isUserToEdit){
      editUser(data)
    }else{
      createUser(data)
    }
  }


  const createUser = (data) => {
    const URL = BASE_URL + "/users/"
    axios.post(URL, data)
    .then(()=>{
      getAllUsers()
      reset(DEFAULT_VALUES);
      setIsShowForm(!isShowForm)
    })
    .catch((err)=>console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;
    axios.delete(URL)
    .then(()=>getAllUsers())
    .catch((err)=>console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserToEdit}/`;
    axios.patch(URL, data)
    .then(()=>{
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowForm(!isShowForm)
      setIsUserToEdit()
    })
    .catch((err)=>console.log(err))
  }
  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"
    axios.get(URL)
    .then((res)=>setUsers(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  const handleClickEdit = (data ) => {
    setIsShowForm((isShowForm)=>!isShowForm)
    reset(data)
    setIsUserToEdit(data.id)
  }

  return (
    <main className='font-sans'>
        <Header  setIsShowForm={setIsShowForm}/>
    <Modal 
    submit={submit} 
    register={register} 
    handleSubmit={handleSubmit} 
    isShowForm={isShowForm} 
    setIsShowForm={setIsShowForm}
    reset={reset}
    setIsUserToEdit={setIsUserToEdit}
    isUserToEdit={isUserToEdit}
    errors={errors}/>
    <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/>
    </main>
    
  )
}

export default App