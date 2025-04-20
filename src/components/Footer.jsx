import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faSquareXTwitter,faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] py-10 bg-gray-100 px-5 text-black '>
  
        <div className='p-6 '>
          <h1 className='text-3xl mt-4'> LookOut</h1>
          <p className='mt-4 text-justify'>Activity tracking helps individuals monitor their daily movements, exercise routines, sleep patterns, and other health-related metrics, offering insights that support goal-setting, habit formation, and overall wellness improvement through data-driven feedback and personalized suggestions.</p>
           
        </div>
        <div className='p-6 md:flex justify-center'>
          <div>
            <h1 className='text-3xl mt-4'>Linkes</h1>
            <Link to={'/'}className='!no-underline text-black'><p className='mt-4 '>Home</p></Link>
            <Link to={'/activity'} className='!no-underline text-black'><p>Activity</p></Link>
            <Link to={'/register'} className='!no-underline text-black'><p>Register</p></Link>
            <Link to={'/login'} className='!no-underline text-black'><p>Login</p></Link>
          </div>
        </div>
        <div className='p-6 md:flex justify-center'>
          <div>
            <h1 className='text-3xl mt-4 '>Guides</h1>
            <a className='!no-underline text-black' href='https://tailwindcss.com/'><p className='mt-4'>Tailwind</p></a>
            <a className='!no-underline text-black' href='https://react.dev/'><p>React</p></a>
            <a className='!no-underline text-black' href='https://vite.dev/'><p>Vite</p></a>
          </div>
        </div>
        <div className='p-6 mb-5 mt-4'>
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