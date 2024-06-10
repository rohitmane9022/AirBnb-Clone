import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PlaceGallary from './PlaceGallary'
import { differenceInCalendarDays, format } from 'date-fns'

export default function BookingSinglePages() {
  const {id}= useParams()
  const [booking,setbooking]= useState(null)

  useEffect(()=>{
    if(id){
      axios.get("/booking").then((response)=> {
       const foundedData= response.data.find(({_id})=> _id===id)
       if(foundedData){
        setbooking(foundedData)
       }
      })
    }
  },[id])
  console.log(booking)

  if(!booking){
    return "";
  }

  return (
    <div className='my-8'>
      <h1 className='text-xl sm:text-3xl'>{booking.place.title}</h1>
      <a className="my-2 block text-sm sm:text-base font-semibold underline flex gap-1" href={"https://maps.google.com/?q="+booking.place.address} target="blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
{booking.place.address}
</a>
<div className='bg-gray-200 p-6 my-6 rounded-2xl  flex flex-col  sm:flex-row sm:justify-between sm:items-center'>
  <div>
  <h2 className='text-xl sm:text-2xl mb-4'>Your Booking Information:</h2>
  <div className="flex gap-1 mb-2 mt-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
{differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nigth: 
<div className="flex gap-1 items-center ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

                {format(new Date(booking.checkIn), 'dd-mm-yyyy')}
                  </div>

                 &rarr;
                 <div className="flex gap-1 items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
 {format(new Date(booking.checkOut), 'dd-mm-yyyy')}
                 </div>
 </div>
  </div>
 
 <div className='bg-primary p-4 text-white rounded-2xl flex sm:flex-col gap-1 justify-center items-center mt-4 sm:mt-auto'>
 <div className='text-xl'>Total Price </div>
 <div className='text-xl sm:text-3xl'>₹{booking.price}</div>
</div>
</div>
<PlaceGallary Place={booking.place}/>
    </div>
  )
}
