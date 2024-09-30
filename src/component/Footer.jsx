import React from 'react';
import './Header.css';
import { IoLogoYoutube } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className="footer">
    <IoLogoYoutube className='icon'/>
    <CiTwitter className='icon'/>
    <FaEnvelope className='icon'/>
    <FaMapMarkerAlt className='icon' />

    </div>
    </>
  )
}

export default Footer