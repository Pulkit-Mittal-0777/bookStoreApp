import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthDataContext } from '../context/AuthContext'
const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const[authUser,setAuthUser]=useContext(AuthDataContext)
    const submitHandler = async (e) => {

        const {email,password}=formData
        await axios.post('http://localhost:4001/user/login',{email,password})
            .then((res)=>{
                console.log(res.data)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                setAuthUser(res.data.user)
                alert("user loggedin successfully")
            })
            .catch((err)=>{
                alert(err.response.data.message)
            })
        e.preventDefault();
        
        

        setFormData({
            email: "",
            password: ""
        });

    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog"

                        onSubmit={submitHandler}
                    >
                        {/* if there is a button in form, it will close the modal */}
                        <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='flex flex-col gap-3 mt-6'>
                            <h1 className=''>Email</h1>
                            <input onChange={handleChange} type="text" name='email' value={formData.email} placeholder='example@gmail.com' className='text-center bg-gray-200 text-xl w-2/3' />
                            <h1 className=''>Password</h1>
                            <input onChange={handleChange} type="text" value={formData.password} placeholder='Password' name='password' className='text-center bg-gray-200 text-xl w-2/3' />
                            <div className='flex justify-around mt-4  items-center'>
                                <button className=' w-15 bg-pink-400 text-white rounded-box  px-3 py-1'>Login</button>
                                <p>Not registered ?{" "}
                                    <Link to='/signup' className='text-blue-500 underline cursor-pointer'>Signup</Link>
                                </p>
                            </div>
                        </div>


                    </form>

                </div>
            </dialog>
        </div>
    )
}

export default Login