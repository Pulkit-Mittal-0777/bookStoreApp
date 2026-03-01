import React from 'react'
import { createContext, useState,useEffect } from 'react'
import axios from 'axios'

export const AuthDataContext = createContext()
const AuthContext = (props) => {

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:4001/user/me", {
        withCredentials: true,
      })
      .then((res) => {
        setAuthUser(res.data);
      })
      .catch(() => {
        setAuthUser(null); 
      })
  }, []);
 
  return (

    <AuthDataContext.Provider value={[authUser, setAuthUser]}>
      {props.children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext