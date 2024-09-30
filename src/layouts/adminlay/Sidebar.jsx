import React from 'react'
import './Sidebar.css';
import { Adminsmenuitem } from '../../component/configdata';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate=useNavigate();
  return (
    <>
    <aside >
        <div className='sidebar'>


       {Adminsmenuitem.map((list)=><div key={list.Id} className='item'
       onClick={()=>{navigate(list.path)} }  
         
         
         >
        <span>{list.icon}</span>{list.label}
       
       </div>

       )}

       </div>

    </aside>
    
    
    
    </>
  )
}

export default Sidebar