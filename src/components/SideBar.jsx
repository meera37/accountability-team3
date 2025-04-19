import { faGlobe, faHouseUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SideBar({setTab}) {
const navigate = useNavigate()

const handleLogout = () => {

  localStorage.setItem('userLogged', JSON.stringify(false))
  localStorage.setItem('curUser','')
  console.log('navigate')
  navigate('/login')
}


    return (
        <>
            <ul className='text-muted mt-4 flex flex-row flex-md-column list-unstyled md:!sticky md:top-[100px] justify-between'>
                <li className='mt-3 no-underline'>
                <Link onClick={()=> {setTab('dashboard')}} className="no-underline flex flex-col md:flex-row items-center " to={'/dashboard'} >
                    <FontAwesomeIcon icon={faHouseUser} className='me-2 ms-3' />Dashboard
                </Link>
                </li>
                <li className='flex flex-col md:flex-row items-center mt-3 no-underline'>
                    <Link onClick={() => {setTab('explore')}} className="flex flex-col md:flex-row items-center " >
                        <FontAwesomeIcon icon={faGlobe} className='me-2 ms-3 ' />Explore
                    </Link>
                </li>
                <li className='flex flex-col md:flex-row items-center mt-3 no-underline'>
                <Link onClick={() => {handleLogout()}} className="flex flex-col md:flex-row items-center " >
                    <FontAwesomeIcon icon={faRightFromBracket} className='me-2 ms-3' />Logout
                </Link>
                </li>
            </ul>
        </>
    )
}

export default SideBar