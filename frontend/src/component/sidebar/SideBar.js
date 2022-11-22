import React from 'react'
import "./SideBar.scss"
const Sidebar = ({children}) => {
  return (
    <div className='layout'>
        <div className='sidebar'>
            <h2>Sidebar</h2>
        </div> 
        <main>{children}</main>
    </div>
  )
}

export default Sidebar