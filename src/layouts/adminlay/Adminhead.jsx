import React from 'react'
import { useState } from 'react';
import './Adminlay.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import { Navigate, useNavigate} from 'react-router-dom';

function Adminhead() {
    let [menustatus ,setmenustatus]=useState(false);
    let [iconstatus ,seticonstatus]=useState(false);
    const navigate = useNavigate();
    
    return (
      <>
      <div id="nav">
        <div className="logo">logo</div>
  
        
        
        
         
           
  
            
  
          <button className="login" onClick={()=>{navigate("/login")}}>Login</button>
          
  
        </div>
  
      
      
      </>
  
  
  
    )
}

export default Adminhead;