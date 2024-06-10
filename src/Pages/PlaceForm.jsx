import axios from 'axios';
import { useEffect, useState } from "react";

import PhotoUploader from './PhotoUploader';
import Perks from '../components/Perks';
import AccountNavigation from './AccountNavigation';
import { Navigate, useParams } from 'react-router';


function PlaceForm() {
  const {id}= useParams()
  console.log(id)
  const [title, settitle] = useState("");
  const [address, setaddress] = useState("");
  const [addedPhotos, setaddedPhotos] = useState([]);
  
  const [description, setdescription] = useState("");
  const [perks, setperks] = useState([]);
  const [extraInfo, setextraInfo] = useState("");
  const [checkIn, setcheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");
  const [maxGuest, setmaxGuest] = useState("");
  const [redirect,setredirect]= useState(false)
  const [Price,setPrice] = useState(100)
  useEffect(()=>{
    if(!id){
      return
    }
    
      axios.get('/place/'+id)
      .then(response=> {
        const {data}= response;
        settitle(data.title)
        setaddress(data.address)
        setaddedPhotos(data.photos)
        
        setdescription(data.description)
        setperks(data.perks)
        setextraInfo(data.extraInfo)
        setcheckIn(data.checkIn)
        setcheckOut(data.checkOut)
        setmaxGuest(data.maxGuest)
        setPrice(data.Price)
      })
        
  },[id])


  const savePlace= async(e)=>{
    e.preventDefault()

    if(title==="" ||address===""  || description==="" || perks==="" || extraInfo=="" || checkIn==="" || checkOut==="" || maxGuest==="" ||Price==="")
    {
      alert("please fill the form perfectly ")
    }
    else{
      const placeData={
        title,address,addedPhotos,description,perks,extraInfo,checkIn,checkOut,maxGuest,Price
      }
      if(id){
        await axios.put("/place", {id,...placeData})
        setredirect(true)
      }
      else{
  
        await axios.post("/place", placeData)
        setredirect(true)
        
      }
    }
   
    

  }
  
  if(redirect){
    return <Navigate to={"/account/place"}/>
  }
   
  return (
       <div>
        <AccountNavigation/>
          <form onSubmit={savePlace}>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">Title for your place. should be short and catchy as in adventure</p>
            <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="title, for example: My lovely apt" />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">More = Better</p>
            <PhotoUploader addedPhotos={addedPhotos} onChange={setaddedPhotos}/>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of the place</p>
            <textarea value={description} onChange={(e) => setdescription(e.target.value)} />

            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">select all the perks of your place</p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setperks} />
            </div>

            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">How many Hours.</p>
            <textarea value={extraInfo} onChange={(e) => setextraInfo(e.target.value)} />

            <h2 className="text-2xl mt-4">Check in and out times, max guests</h2>
            <p className="text-gray-500 text-sm">add check in and out time, remember to have how many guest are coming</p>
            <div className=" grid grid-cols-2 gap-2 md:grid-cols-4">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" 
                placeholder="2pm"
                 value={checkIn}
                 onChange={(e) => setcheckIn(e.target.value)} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check in out</h3>
                <input type="text" 
                placeholder="11" 
                value={checkOut}
                 onChange={(e) => setcheckOut(e.target.value)} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests </h3>
                <input type="text" 
                placeholder="1" 
                value={maxGuest} 
                onChange={(e) => setmaxGuest(e.target.value)} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Price per Night</h3>
                <input type="text" 
                placeholder="1" 
                value={Price} 
                onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <button className="primary my-4" type='submit' onClick={console.log("click")}>Save</button>
          </form>
        </div>
    
  )
}

export default PlaceForm