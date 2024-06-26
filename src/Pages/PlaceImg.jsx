

export default function PlaceImg({place,index=0,className=null}) {

  if(!place.photos?.length){
    return ""
  }
  
  return (
   
      <img  className="h-full overflow-hidden min-w-38 sm:w-48" src={"https://backend-of-airbnb.vercel.app/uploads/"+place.photos[index]}/>
  
  )
}
