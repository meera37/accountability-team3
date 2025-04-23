import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const isUserLogged = JSON.parse(localStorage.getItem('userLogged'))
  const currentUser = localStorage.getItem('curUser')

  const [menuopen, setmenuopen] = useState(false)

  const header_links = {
    'Home': 'home',
    'features': 'feature',
    'about': 'about',
    'blog': 'blogs',
    'contact': 'contact',
  }

  return (

    <header className="sg__header sticky top-0 bg-white shadow-md z-50 pt-3">
      <div className="sg__container flex items-center justify-between w-full max-w-screen-xl mx-auto px-4">

        {/* Logo */}
        <Link to="/" className="!no-underline">
            <div className="logo flex items-center gap-3 w-full sm:w-auto">
              <img src="https://play-lh.googleusercontent.com/7cwJD9wRKPu1xnSomH7UI0ICAXT_lJt7JAJa76Nut0oYH__b2XvjaUUpJHQhhx41roA" alt="brand logo" className="h-20 w-20" style={{width:'50px',height:'50px'}}/>
              <h1 className="fs-3 font-semibold text-black italic">sharedo</h1>
            </div>
        </Link>

        <button
          onClick={() => setmenuopen(!menuopen)}
          className="ham-wrap flex items-center justify-center w-[52px] h-[52px] lg:hidden"
          aria-label="Toggle Menu"
        >
          <div className={`hamburger ${menuopen ? 'open' : ''}`}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </button>



        {
         isUserLogged?
        (
           <div className='d-flex align-center justify-center flex-row-reverse'>
            {/* free avatar api - https://www.dicebear.com/playground/ */}
               
              <img className="rounded-circle shadow-4-strong w-[40px] h-[40px] md:w-[80px] md:h-[80px]" alt="avatar2" src={`https://api.dicebear.com/9.x/adventurer/svg?seed=`} />


              <p className='mt-3 me-1 text-bold'>Hello, {currentUser}</p>
          </div>
        )
         :
        (
        <nav
          className={`navigation w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${menuopen ? 'flex flex-col absolute top-full left-0 right-0 px-4 py-2 shadow-md' : 'hidden'
            } lg:flex lg:flex-row lg:static lg:items-center lg:justify-between`}
        >
          {
          Object.keys(header_links).map((text, idx) => (
            <Link
              to={header_links[text]}
              key={`navigation${idx}`}
              className="capitalize px-3 py-2 text-gray-700 hover:text-blue-600 nav-item block !no-underline"
              onClick={() => setmenuopen(false)}
            >
              {text}
            </Link>
          ))}

          <div className=''>
            <Link to="/login">
              <button className='me-4 btn btn-outline-danger p-2'  endIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className='bg-amber-300 p-2  text-black rounded' >
                Register
              </button>
            </Link>
          </div>
        </nav>)

        }
      </div>
    </header>
  )
}



export default Header