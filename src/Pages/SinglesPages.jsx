import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BookingWindow from "./BookingWindow";
import PlaceGallary from "./PlaceGallary";
import Loading from "./Loading";

export default function SinglesPages() {
  const {id}= useParams()
  const [Place,setPlace] = useState([])
  const [Show,setShow]= useState(false)
  
  useEffect(()=>{
      if(!id){
        return null;
      }
      axios.get(`/place/${id}`).then(response=> setPlace(response.data))
      setShow(true)
  },[id])
console.log(Place)


  return (
    <div>{
      Show?
    <div className="mt-4 px-4 pt-2 sm:px-8 sm:pt-8 grid justify-center mx-auto">
    <h1 className="text-xl sm:text-3xl">{Place.title}</h1>
    <a className="my-2 block text-sm sm:text-base font-semibold underline flex gap-1" href={"https://maps.google.com/?q="+Place.address} target="blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
<path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
{Place.address}
</a>
    
  <PlaceGallary Place={Place}/>
    <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
      
      <div>
      <div className="my-4">
    <h2 className="font-semibold text-2xl">Description</h2>
    {Place.description}</div>
    Check-in: {Place.checkIn}<br/>
    Check-out: {Place.checkOut}<br/>
      Max number of guest: {Place.maxGuest}
      
    </div>
    <div>
     <BookingWindow Place={Place}/>
    </div>
    </div>
    <div className="border-t bg-neutral-50  px-8 py-8">
    <div>
      <h2 className="font-semibold text-lg sm:text-2xl ">Extra Info</h2>
    </div>
    <div className="mb-4 mt-2 text-sm text-gray-700 leading-5 ">{Place.extraInfo}</div>
    </div>
  </div>:<Loading/>}
  </div>
    
  )
}
