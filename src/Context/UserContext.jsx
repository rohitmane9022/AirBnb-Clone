import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext=createContext()


function UserProvider({children}) { 
  const [user,setuser]= useState(null)
  const [ready,setready]= useState(false)

  useEffect(()=>{

    if(!user){
      axios.get("/profile").then(({data})=>{setuser(data)
      setready(true)})
      
    }
  },[])
  return (
    <UserContext.Provider value={{user,setuser,ready}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
