import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import '../pages/Card.css'
import { Link , useNavigate } from 'react-router-dom'

function Cards() {

    const navigate = useNavigate();

    const handleMore = (item,index) => {
        let postslug = item?.title.split(" ")[0]
        // console.log({postslug, item })
        navigate(`/blogs/${postslug}-${index}`,{ state:{item} })
    }

    const cards = [
        { title: 'Accountability', text: 'Kit Slocum, ADHD coach and FLOWN facilitator, explains how she uses tactile visual cues to help her remember things and take the right actions.' },
        { title: 'Accountability', text: 'Explore 10 ways virtual coworking helps you stay focused, build routines, and crush goals—all from the comfort of home.' },
        { title: 'Accountability', text: 'Stop procrastination becoming “the thief of time”. Get unstuck with 60 of our favourite quotes about proscrastination for a motivation.' },
        { title: 'Accountability', text: ' Kit Slocum, ADHD coach and FLOWN facilitator, explains how she uses tactile visual cues to help her remember things and take the right actions.' },
        { title: 'Accountability', text: 'Explore 10 ways virtual coworking helps you stay focused, build routines, and crush goals—all from the comfort of home.' },
        { title: 'Accountability', text: ' Stop procrastination becoming “the thief of time”. Get unstuck with 60 of our favourite quotes about proscrastination for a motivation.' },
    ]

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <Row className="w-100 mt-5">

                    {
                        cards.map((item,idx) => (

                            <Col key={`blog-${idx}`} md={4} className='mb-5'>
                                <Card style={{ width: '100%' }} className='card'>
                                    <Card.Img variant="top" src="https://www.datocms-assets.com/47749/1681485390-ezgif-com-resize-11.png" />
                                    <Card.Body>
                                        <Card.Title className='fw-bold text-dark'>{item.title}</Card.Title>
                                        <Card.Text className='text-muted' style={{ textAlign: 'justify' }}>
                                            {item.text}
                                        </Card.Text>

                                        <Button onClick={()=> {handleMore(item,idx+1)}} variant="" className='btn-outline-secondary'>Know more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>


            </Container>




        </>
    )
}

export default Cards