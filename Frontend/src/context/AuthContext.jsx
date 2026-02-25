import React from 'react'
import { createContext, useState } from 'react'

export const AuthDataContext = createContext()
const AuthContext = (props) => {

  const currentUser = localStorage.getItem("user")
  const [authUser, setAuthUser] = useState(
     currentUser? JSON.parse(currentUser): null
  );
  return (

    <AuthDataContext.Provider value={[authUser,setAuthUser]}>
      {props.children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext