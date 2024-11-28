import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaYoutube , FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
  
  <footer className='social'>
  
    <h3>Social Links</h3>
    
    <div >
     <Link href={''}><FaFacebookF/></Link>
     <Link href={''}><FaYoutube/></Link>
     <Link href={''}><FaTwitter/></Link>
     <Link href={''}><FaInstagram/></Link>
     <Link href={''}><FaTiktok/></Link>
    
    
<a href="mailto:ahsan_seth@yahoo.com"><AiOutlineMail className="size-8"/>
    ahsan_seth@yahoo.com</a>

      <p>&copy; 2024 Al Falah Rice. All Rights Reserved</p>
      </div>
    </footer>
  
  )
}

export default Footer
