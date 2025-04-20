import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faSquareXTwitter,faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] py-10 bg-gray-100 px-5 text-black '>
  
        <div className='p-6 '>
          <h1 className='text-3xl '> LookOut</h1>
          <p className='mt-4 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magni quas atque excepturi placeat eligendi delectus impedit commodi, asperiores id sequi vel qui! Qui fugit ipsum, aperiam quo tempora delectus.</p>
           
        </div>
        <div className='p-6 md:flex justify-center'>
          <div>
            <h1 className='text-3xl'>Linkes</h1>
            <Link to={'/'}><p className='mt-4'>Home</p></Link>
            <Link to={'/activity'}><p>Activity</p></Link>
            <Link to={'/mgrid'}><p>mgrid</p></Link>
            <Link to={'/register'}><p>Register</p></Link>
          </div>
        </div>
        <div className='p-6 md:flex justify-center'>
          <div>
            <h1 className='text-3xl'>Guides</h1>
            <p className='mt-4'>Tailwind</p>
            <p>React</p>
            <p>Vite</p>
          </div>
        </div>
        <div className='p-6 mb-5'>
          <h1 className='text-3xl'>ContactUs</h1>
          <div className='flex mt-4'>
            <input type="text" placeholder='Email Id ' className='p-3 text-black rounded bg-amber-50 form-control'/>
            <button className='bg-amber-700 text-white rounded px-3 ms-3'>Suscribe</button>
          </div>
          <div className='flex justify-between mt-5 text-3xl'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faSquareXTwitter} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Footer