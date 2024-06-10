import{ useState } from 'react'

export default function PlaceGallary({Place}) {
  const [ShowAllPhoto,setShowAllPhoto]= useState(false)
  if(ShowAllPhoto){
    return(
      <div className="absolute inset-0 bg-black text-white min-h-full">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-xl sm:text-3xl">Photo of {Place.title}</h2>
            <button onClick={e=> setShowAllPhoto(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black text-sm sm:text-base"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
Close photo</button>
          </div>
        {Place?.photos?.length>0 && Place.photos.map(photo=>(
          <div className='flex justify-center items-center '>
            <img className='rounded-2xl overflow-hidden' src={"https://vast-plum-squid-yoke.cyclic.app/uploads/"+photo}/>
          </div>
        ))}
        </div>
      </div>
    )
  }
  return (
    <div className="relative sm:w-[80%] md:w-[90%]  grid">
    <div className="grid gap-1 sm:grid-cols-[2fr_1fr]  rounded-3xl overflow-hidden">
     <div className="grid">
      {Place.photos?.[0] &&(
        <div >
           <img onClick={()=> setShowAllPhoto(true)} className="cursor-pointer h-[100%]	" src={`https://vast-plum-squid-yoke.cyclic.app/uploads/`+Place.photos[0]} alt="" />
        </div>
       
      )}
      </div>
      
     <div className=" grid gap-1 hidden sm:grid">
     {Place.photos?.[1] &&(
        <img onClick={()=> setShowAllPhoto(true)} className="cursor-pointer object-cover" src={`https://vast-plum-squid-yoke.cyclic.app/uploads/`+Place.photos[1]} alt="" />
      )}
      <div className="">
      {Place.photos?.[2] &&(

<img onClick={()=> setShowAllPhoto(true)} className="cursor-pointer overflow-hidden" src={`https://vast-plum-squid-yoke.cyclic.app/uploads/`+Place.photos[2]} alt="" />
)}
      </div>
      
     </div>
    </div>
    <button onClick={()=> setShowAllPhoto(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl  shadow-md shadow-gray-500 text-sm sm:text-base">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 ">
<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
Show more photos</button>
    </div>
  )
}
