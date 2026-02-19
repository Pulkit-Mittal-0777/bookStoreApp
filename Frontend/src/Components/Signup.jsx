import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
const Signup = () => {
    return (
        <div className='flex justify-center items-center w-full  h-screen'>

            <div className=" w-130 h-100 relative p-4 shadow-2xl rounded-md">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                </form>
                <h3 className="font-bold text-lg">Signup</h3>
                <div className='flex flex-col gap-3 mt-6'>
                    <h1 className=''>Name</h1>
                    <input type="text" placeholder='Enter Your Name' className='text-center bg-gray-200 text-xl w-2/3' />
                    <h1 className=''>Email</h1>
                    <input type="text" placeholder='example@gmail.com' className='text-center bg-gray-200 text-xl w-2/3' />
                    <h1 className=''>Password</h1>
                    <input type="text" placeholder='Password' className='text-center bg-gray-200 text-xl w-2/3' />
                    <div className='flex justify-around mt-4  items-center'>
                        <button className=' w-18 bg-pink-400 text-white rounded-box  px-3 py-1'>Signup</button>
                        <p>Have Account ?{" "}
                            <button to='/lo' className='text-blue-500 underline cursor-pointer'
                            onClick={()=>
                                document.getElementById("my_modal_3").showModal()
                            }   
                            >
                           
                            Login
                            </button>
                            <Login/>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Signup