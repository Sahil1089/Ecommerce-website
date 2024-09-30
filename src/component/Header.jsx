import React, { useState } from 'react';
import './Header.css';
import {FaSearch} from "react-icons/fa";
import { IoLocationSharp ,IoReorderThreeOutline,IoBookOutline ,IoStorefrontSharp} from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";




function Header() {
  let [iconstatus ,seticonstatus]=useState(false);
  let [menustatus ,setmenustatus]=useState(false);
  return (
    <>
    <div className="nav">
      <div className="logo">logo</div>

      <div className="search" id='searchbox'>
        <input type="search" name="" id="search" />
        <FaSearch className='icon'/>
      </div>

      <div className="address" id='hitem'>
      <IoLocationSharp className='icon'/>

        <h5>new delhi</h5>
      </div>
      
        <ul className={` ${menustatus?'activemenu':"menu"}`}>
          <li><span id='hitem'><IoStorefrontSharp className='icon'/></span></li>

          <li><span id='hitem'><BsCart4 className='icon'/>wishlist</span></li>

          <li><button id="login">Login</button></li>
          <li><span id='hitem'><IoBookOutline className='icon'/>
   <h4>orders</h4></span></li>


        </ul>
        <div className="ic">
        <button className="hicon" onClick={()=>{
          setmenustatus(!menustatus);
        }}><IoReorderThreeOutline className={iconstatus?"visi":"invisi"}/>
        </button>
        </div>
        

      </div>

    
    
    </>



  )
}

export default Header;