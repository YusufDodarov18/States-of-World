import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="mt-[300px] md:mt-0">
       <Outlet /> 
    </div>
  )
}

export default Layout
