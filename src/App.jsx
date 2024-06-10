import './App.css'
import { Route,Routes } from 'react-router'

import IndexPages from './components/IndexPages'
import Layout from './Pages/Layout'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import axios from 'axios'

import ProfilePage from './Pages/ProfilePage'
import PlacePage from './Pages/PlacePage'
import PlaceForm from './Pages/PlaceForm'
import SinglesPages from './Pages/SinglesPages'
import BookingPages from './Pages/BookingPages'
import BookingSinglePages from './Pages/BookingSinglePages'


axios.defaults.baseURL="https://vast-plum-squid-yoke.cyclic.app"
axios.defaults.withCredentials=true

function App() {
  console.log(import.meta.env.BASE_URL)

  return (
    <div>
    
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPages/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account' element={<ProfilePage/>}/>
      <Route path='/account/place' element={<PlacePage/>}/>
      <Route path='/account/booking' element={<BookingPages/>}/>

      <Route path='/account/place/new' element={<PlaceForm/>}/>
      <Route path='/account/place/:id' element={<PlaceForm/>}/>
      <Route path='/place/:id' element={<SinglesPages/>}/>
      
      <Route path='/account/booking/:id' element={<BookingSinglePages/>}/>
     </Route>
    </Routes>
    </div>
  )
}

export default App
