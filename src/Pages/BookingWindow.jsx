
import axios from "axios"
import { differenceInCalendarDays } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router"
import { UserContext } from "../Context/UserContext"

export default function BookingWindow({Place}) {
  const [checkIn,setcheckIn]= useState("")
  const [checkOut,setcheckOut]= useState("")
  const [numberOfGuests,setnumberOfGuests]= useState(1)
  const [name,setname]= useState('')
  const [Phone,setPhone]= useState('')
  const [redirect,setredirect]= useState("")
  const {user} = useContext(UserContext)


  useEffect(()=>{
    if(user){
      setname(user.name)
    }
  },[user])

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  const bookThisPlace=async()=>{
    
    const response=await axios.post("/bookings",{checkIn,checkOut,name,Phone,numberOfGuests,
    place:Place._id,
    price:numberOfNights * Place.Price});
    
      const BookingId= response.data._id
      console.log(response)

      setredirect(`/account/booking/${BookingId}`)
  }

  if(redirect){
    return <Navigate to={redirect}/>
  }
  
  return (
    
       <div className="bg-neutral-50 text-center p-4 rounded-2xl">
          <div className="text-lg sm:text-2xl">Price: ₹{Place.Price} / per night
          </div>
          <div className="border rounded-2xl mt-4">
            <div className="flex-row sm:flex">
            <div className="py-3 px-4 ">
            <label>Check in: </label>
            <input type="date" value={checkIn} onChange={e=> setcheckIn(e.target.value)}/>
          </div>
          <div className="py-3 px-4 border border-t-1 sm:border-l">
            <label>Check out: </label>
            <input type="date" value={checkOut} onChange={e=> setcheckOut(e.target.value)}/>
          </div>
            </div>
          
          <div className="py-3 px-4 border-t">
            <label>Number of guests: </label>
            <input type="number" value={numberOfGuests} onChange={e=> setnumberOfGuests(e.target.value)}/>
          </div>
          

          {numberOfNights >0 &&(
             <div className="py-3 px-4 border-t">
             <label>Your full name: </label>
             <input type="text" value={name} onChange={e=> setname(e.target.value)} placeholder="Rohit Mane"/>

             <label>Phone Number: </label>
             <input type="tel" value={Phone} onChange={e=> setPhone(e.target.value)} placeholder="741236985"/>
           </div>
          )}
          </div>
          
          <button onClick={bookThisPlace} className="primary mt-4">Book this place ₹{numberOfNights > 0 && (
          <span>{numberOfNights * Place.Price}</span>
        )}</button>
        </div>
    
  )
}
