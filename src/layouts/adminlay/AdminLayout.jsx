import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Adminlay.css';
import Adminhead from './Adminhead';

function AdminLayout() {
  return (
    <><Adminhead/>
      <div className="main" >

        <div className="left"> <Sidebar/></div>
        <div className="right">
        <Outlet/></div>
     
       
          
          
      
           </div> 
      
    
    </>
  )
}

export default AdminLayout