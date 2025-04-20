import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareXTwitter, faSquareWhatsapp, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className=' text-black py-15 px-5' style={{ marginTop: '50px', marginBottom: '20px' }}>
        <div className='md:grid md:grid-cols-[2fr_1fr_1fr_2fr] gap-8'>
          {/* <div className='md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] py-10 bg-gray-100 px-5 text-black'> */}

          <div className='p-6 '>
            <h1 className='text-3xl '> LookOut</h1>
            <p className='mt-4 text-justify'>Connect with people who share your goals, stay motivated together, and build powerful habits that last — one connection at a time. Discover our integrated habit tracker to monitor your progress and celebrate your achievements.</p>

          </div>
          <div className='p-6 md:flex justify-center'>
            <div>
              <h1 className='text-3xl'>Links</h1>
              <Link to={'/'}><p className='mt-4'>Home</p></Link>
              <Link to={'/about'}><p>About us</p></Link>
              <Link to={'/'}><p>Team</p></Link>
            </div>
          </div>
          <div className='p-6 md:flex justify-center'>
            <div>
              <h1 className='text-3xl mb-4'>Explore</h1>
              <Link to={'/blogs'}><p>Blog</p></Link>
              <Link to={'/'}><p>FAQs</p></Link>

              {/* <p className='mt-4'>Tailwind</p>
            <p>React</p>
            <p>Vite</p> */}
            </div>
          </div>
          <div className='p-6 mb-5'>
            <h1 className='text-3xl'>ContactUs</h1>
            <div className='flex mt-4'>
              <input type="text" placeholder='Email Id ' className='p-3 text-black rounded bg-amber-50 form-control' />
              <button className='bg-amber-700 text-white rounded px-3 ms-3'>Subscribe</button>
            </div>
            <div className='flex justify-between mt-4 text-2xl'>
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black">
                <FontAwesomeIcon icon={faFacebook} />

              </Link>
              <Link
                to="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: 'black' }} />

              </Link>
              
              <Link
                to="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black">

<FontAwesomeIcon icon={faSquareWhatsapp} />

              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                >
<FontAwesomeIcon icon={faSquareInstagram} />
              </Link>     
                 </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer