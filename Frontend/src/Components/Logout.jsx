import React, { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'

const Logout = () => {
    const [authUser,setAuthUser]=useContext(AuthDataContext);
    const handleLogout=()=>{
        
        setAuthUser(null)
        localStorage.removeItem("user");
        alert("Logged out successfully")
    }
    return (
        <div>
            <button
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer active:scale-90 duration-75"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default Logout