import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuopen, setmenuopen] = useState(false)

  const header_links = {
    'Home': 'home',
    'feactures': 'feacture',
    'about': 'about',
    'contact': 'contact',
    // English
  }
  return (

    <header className="sg__header sticky top-0 bg-white shadow-md z-50">
      <div className="sg__container flex flex-wrap items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-3">

        {/* Logo */}
        <div className="logo flex items-center gap-3 w-full sm:w-auto">
          <img src="./vite.svg" alt="brand logo" className="h-10 w-10" />
          <h1 className="text-xl font-semibold">LookOut</h1>
        </div>

        {/* Hamburger Icon */}
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

        {/* Navigation Menu */}
        <nav
          className={`navigation w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${menuopen ? 'flex flex-col absolute top-full left-0 right-0 px-4 py-2 shadow-md' : 'hidden'
            } lg:flex lg:flex-row lg:static lg:items-center lg:justify-between`}
        >
          {Object.keys(header_links).map((text, idx) => (
            <Link
              to={header_links[text]}
              key={`navigation${idx}`}
              className="capitalize px-3 py-2 text-gray-700 hover:text-blue-600 nav-item block no-underline"
              onClick={() => setmenuopen(false)} // auto-close on mobile
            >
              {text}
            </Link>
          ))}

          <div className=''>
            <Button className='me-4' variant="outlined" endIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
              Login
            </Button>
            <Button variant="contained" >
              Register
            </Button>
          </div>
        </nav>
      </div>
    </header>

    // /<Link key={`navigation${idx}`} to={`${header_links[url]}`}
    // className="capitalize px-[12px] py-[8px] nav-item">
    // 	{url}
    // </Link> 
  )
}



export default Header