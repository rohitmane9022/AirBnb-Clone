import axios from "axios"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext"


function login() {
  const [email,setemail]= useState("");
  const [password,setpassword]=useState("");
  const [redirect,setredirect]= useState(false);
const {setuser} = useContext(UserContext);


const handleAsGuest=async(e)=>{
  e.preventDefault()
  setemail("tests@gmail.com")
  setpassword("12345678")
  const {data}= await axios.post("/login",{email,password})
  setuser(data)
  alert("Login Successfully")
       setredirect(true)
}

  const LoginUser=async(e)=>{
   
    e.preventDefault()
    try{
     const {data}= await axios.post("/login",{email,password})
     console.log(data)
     if(data.email==="" || data.password===""){
       setuser(null)
      alert("failed")
       setredirect(false)
     }
     else if (data==="not found"){
      setuser(null)
      alert("failed please resgister email then come back")
       setredirect(false)
     }

     else{
       setuser(data)
       alert("Login Successfully")
       setredirect(true)
     }
      
     
      
    }
    catch(error){
      alert("Please provide both email and password")
    }

  }

  if(redirect){
    return <Navigate to={"/"}/>
  }
 
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
      <h1 className="text-4xl text-center mb-4">Login</h1>
     <form className="max-w-md mx-auto" onSubmit={LoginUser}>
      <input type="text" placeholder="your@email.com" value={email} onChange={e=> setemail(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={e=> setpassword(e.target.value)}/>
      <button className="primary" type="submit">login</button>
      <button className="primary mt-1" onClick={handleAsGuest}>Login as Guest</button>
      <div className="text-center py-2 text-gray-500">Don`t have account yet? <Link to={"/register"} className="underline text-black">Register now</Link>
      </div>
     </form>
      </div>
      
    </div>
  )
}

export default login