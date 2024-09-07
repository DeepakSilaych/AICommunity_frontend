import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import { Heart, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <>
    <div className='w-full text-center text-white  p-4 flex justify-center items-center gap-2'> 
    <span>Contact Info<br/>
          Feel free to reach out to us!<br/>
          Email: aicommunity.iitb@gmail.com<br/>
          Contact: +91 8769740232<br/>
          <div>
            <Link to="https://www.instagram.com/ai.community_iitb/">
              <Instagram className='inline hover:stroke-purple-500 mr-2'/>
            </Link>
            <Link to='https://x.com/aic_iitb'>
              <Twitter className='inline hover:stroke-blue-500'/>
            </Link>
          </div>
    </span>
    </div>
    <div className='w-full text-center text-white  p-4 flex flex-wrap justify-center items-center gap-2'>
        Developed by the Web Team with <Heart className='h-4 text-yellow-400 fill-yellow-400' /> | Institute Technical Council 2024
    </div>
    </>
  )
}

export default Footer