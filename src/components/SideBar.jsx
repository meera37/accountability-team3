import { faGlobe, faHouseUser, faRightFromBracket,faBell  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'


function SideBar({setTab}) {
const navigate = useNavigate()

const handleLogout = () => {
  localStorage.setItem('userLogged', JSON.stringify(false))
  localStorage.setItem('curUser','')
  localStorage.removeItem('dp')
  navigate('/login')
}

    return (
        <>
            <ul className='text-muted mt-4 flex flex-row flex-md-column list-unstyled md:!stick md:top-[100px] justify-between'>
                <li className='mt-3 '>
                <Link onClick={()=> {setTab('dashboard')}} className=" flex flex-col md:flex-row items-center text-black"
                // to={`/u/${localStorage.getItem('curUser')}`}
                to={`/dashboard`}
                style={{textDecoration: 'none'}}
                >
                    <FontAwesomeIcon icon={faHouseUser} className='me-2 ms-3' />Dashboard
                </Link>
                </li>
                <li className='flex flex-col md:flex-row items-center mt-3 '>
                    <Link onClick={() => {setTab('explore')}} className="flex flex-col md:flex-row items-center  text-black"style={{textDecoration: 'none'}} >
                        <FontAwesomeIcon icon={faGlobe} className='me-2 ms-3 ' />Explore
                    </Link>
                </li>
                {/* <li className='flex flex-col md:flex-row items-center mt-3 '>
                    <Link onClick={() => {setTab('notifications')}} className="flex flex-col md:flex-row items-center  text-black" style={{textDecoration: 'none'}}>
                        <FontAwesomeIcon icon={faBell} className='me-2 ms-3' />Notification
                    </Link>
                </li> */}
                <li className='flex flex-col md:flex-row items-center mt-3 '>
                <Link onClick={() => {handleLogout()}} className="flex flex-col md:flex-row items-center  text-black" style={{textDecoration: 'none'}}>
                    <FontAwesomeIcon icon={faRightFromBracket} className='me-2 ms-3' />Logout
                </Link>
                </li>

            </ul>
        </>
    )
}

export default SideBar