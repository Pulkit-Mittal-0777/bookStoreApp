import React, { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios';
const Logout = () => {
    const [authUser, setAuthUser] = useContext(AuthDataContext);
    const handleLogout = async() => {

        try {
            await axios.post(
                "http://localhost:4001/user/logout",
                {},
                { withCredentials: true } // VERY IMPORTANT
            );

            setAuthUser(null); // clear frontend state
            alert("Logged out successfully");

        } catch (error) {
            console.log(error);
        }
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