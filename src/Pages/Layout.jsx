
import { Outlet } from 'react-router'
import Headers from '../components/Headers'

function Layout() {
  return (
    <div  className="py-4 px-8 flex flex-col min-h-screen max-w-[1450px] mx-auto">
      <Headers/>
      <Outlet/>
    </div>
  )
}

export default Layout