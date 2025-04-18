import { faGlobe, faHouseUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <>


            {/* large screens */}
            <Container className='bg-light'>

                <Row>
                    <Col className='d-none d-md-block vh-100 shadow p-3 position-fixed'>
                        <ul className='text-muted mt-4 list-unstyled'>
                            <Link to={'/dashboard'} style={{textDecoration:'none'}}><li className='mt-3'><FontAwesomeIcon icon={faHouseUser} className='me-2 ms-3' />Dashboard</li></Link>
                            <li className='mt-3'><FontAwesomeIcon icon={faGlobe} className='me-2 ms-3 ' />Explore</li>
                            <li className='mt-3'><FontAwesomeIcon icon={faRightFromBracket} className='me-2 ms-3' />Logout</li>
                        </ul>

                    </Col>

                </Row>
            </Container>


            {/* smallscreen */}
            <div className="d-md-none bg-white position-fixed bottom-0 start-0 w-100 py-2 shadow">
                <div className="d-flex justify-content-around text-muted">

                    <div className="d-flex flex-column align-items-center">
                        <FontAwesomeIcon icon={faHouseUser} size="sm" />
                        <p style={{ fontSize: '12px' }}>Dashboard</p>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                        <FontAwesomeIcon icon={faGlobe} size="sm" />
                        <p style={{ fontSize: '12px' }}>Explore</p>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                        <FontAwesomeIcon icon={faRightFromBracket} size="sm" />
                        <p style={{ fontSize: '12px' }}>Logout</p>
                    </div>

                </div>
            </div>



        </>
    )
}

export default SideBar