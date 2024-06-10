import { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"
import { Navigate, useParams } from "react-router"

import axios from "axios"
import PlacePage from "./PlacePage"
import AccountNavigation from "./AccountNavigation"


function ProfilePage() {
  const {user,ready,setuser}= useContext(UserContext)
  const [redirect,setredirect]=useState(false)

  let {subpage}= useParams()

  if(subpage===undefined){
    subpage='profile'
  }

  if(!ready){
    return "Loading....."
  }

  if(ready && !user){
    return <Navigate to={"/login"}/>
  }



  const Logout=async()=>{
      await axios.post("/logout")
      setuser(null)
    setredirect(true)

  }
if(redirect){
  return <Navigate to={"/"}/>
}
  return (
    <div>
      <AccountNavigation/>
      {subpage==='profile' &&(
        <div className=" text-center max-w-lg mx-auto">
            Logged in as {user.name} ({user.email})<br/>
            <button className="primary max-w-sm mt-2" onClick={Logout}>Logout</button>
        </div>
      )}

      {
        subpage === "place"&&(
          
            <PlacePage/>
        
        )
      }
    </div>
  )
}

export default ProfilePage