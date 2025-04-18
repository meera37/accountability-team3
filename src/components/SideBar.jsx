import { faGlobe, faHouseUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <>
            <ul className='text-muted mt-4 flex flex-row flex-md-column list-unstyled md:!sticky md:top-[100px] justify-between'>
                <li className='mt-3'>
                <Link className="flex flex-col md:flex-row items-center" to={'/dashboard'} style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faHouseUser} className='me-2 ms-3' />Dashboard
                </Link>
                </li>
                <li className='flex flex-col md:flex-row items-center mt-3'>
                    <FontAwesomeIcon icon={faGlobe} className='me-2 ms-3 ' />Explore
                </li>
                <li className='flex flex-col md:flex-row items-center mt-3'>
                    <FontAwesomeIcon icon={faRightFromBracket} className='me-2 ms-3' />Logout
                </li>
            </ul>
        </>
    )
}

export default SideBar