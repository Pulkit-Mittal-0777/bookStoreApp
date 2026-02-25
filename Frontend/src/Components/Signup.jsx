import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'

import axios from 'axios'
const Signup = () => {

    const [formData, setFormData] = useState({
        username:"",
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = async (e) => {

        e.preventDefault();
        const { username, email, password } = formData;
        await axios.post('http://localhost:4001/user/signup', { username, email, password })
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    localStorage.setItem("user",JSON.stringify(res.data.user))
                    alert("user signedup successfully")
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data.message)
            })

        setFormData({
            username: "",
            email: "",
            password: ""
        });

    }



    return (
        <div className='flex justify-center items-center w-full  h-screen'>

            <div className=" w-130 h-100 relative p-4 shadow-2xl rounded-md">
                <form onSubmit={submitHandler} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                    <h3 className="font-bold text-lg">Signup</h3>
                    <div className='flex flex-col gap-3 mt-6'>
                        <h1 className=''>Name</h1>
                        <input onChange={handleChange} value={formData.username} name='username' type="text" placeholder='Enter Your Name' className='text-center bg-gray-200 text-xl w-2/3' />
                        <h1 className=''>Email</h1>
                        <input onChange={handleChange} value={formData.email} name='email' type="text" placeholder='example@gmail.com' className='text-center bg-gray-200 text-xl w-2/3' />
                        <h1 className=''>Password</h1>
                        <input onChange={handleChange} value={formData.password} name='password' type="text" placeholder='Password' className='text-center bg-gray-200 text-xl w-2/3' />
                        <div className='flex justify-around mt-4  items-center'>
                            <button className=' w-18 bg-pink-400 text-white rounded-box  px-3 py-1'>Signup</button>
                            <p>Have Account ?{" "}
                                <button to='/lo' className='text-blue-500 underline cursor-pointer'
                                    onClick={() =>
                                        document.getElementById("my_modal_3").showModal()
                                    }
                                >

                                    Login
                                </button>
                                <Login />
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Signup