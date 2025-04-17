import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import '../pages/Card.css'
import { Link } from 'react-router-dom'



function Cards() {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <Row className="w-100 mt-5">

                    <Col md={4}>

                        <Card style={{ width: '100%' }} className='card'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1681485390-ezgif-com-resize-11.png" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted' style={{textAlign:'justify'}}>
                                    Kit Slocum, ADHD coach and FLOWN facilitator, explains how she uses tactile visual cues to help her remember things and take the right actions.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>
                            </Card.Body>
                        </Card>


                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%' }}  className='card mt-4 mt-md-0'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1731085463-blog-headers-and-flown-coaching-profiles.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted' style={{textAlign:'justify'}}>
                                    Explore 10 ways virtual coworking helps you stay focused, build routines, and crush goals—all from the comfort of home.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%' }}  className='card mt-4 mt-md-0'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1669927482-60-quotes-on-procrastination.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted' style={{textAlign:'justify'}}>
                                    Stop procrastination becoming “the thief of time”. Get unstuck with 60 of our favourite quotes about proscrastination for a motivation.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row className="w-100 mt-5">

                    <Col md={4}>

                        <Card style={{ width: '100%' }} className='card'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1681485390-ezgif-com-resize-11.png" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted'>
                                    Kit Slocum, ADHD coach and FLOWN facilitator, explains how she uses tactile visual cues to help her remember things and take the right actions.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>


                            </Card.Body>
                        </Card>


                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%' }} className='card mt-4 mt-md-0'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1731085463-blog-headers-and-flown-coaching-profiles.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted' style={{textAlign:'justify'}}>
                                    Explore 10 ways virtual coworking helps you stay focused, build routines, and crush goals—all from the comfort of home.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '100%' }}  className='card mt-4 mt-md-0'>
                            <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1669927482-60-quotes-on-procrastination.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Accountability</Card.Title>
                                <Card.Text className='text-muted' style={{textAlign:'justify'}}>
                                    Stop procrastination becoming “the thief of time”. Get unstuck with 60 of our favourite quotes about proscrastination for a motivation.
                                </Card.Text>

                                <Link to={'/knowmore'}><Button variant="" className='btn-outline-secondary'>Know more</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>




        </>
    )
}

export default Cards