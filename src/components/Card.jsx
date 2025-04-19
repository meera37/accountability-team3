import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import '../pages/Card.css'
import { getBlogDetailsApi } from '../services/allApi'
import { Link , useNavigate } from 'react-router-dom'

function Cards() {

    const navigate = useNavigate();

    const handleMore = (item,index) => {
        let postslug = item?.title.split(" ")[0]
        // console.log({postslug, item })
        navigate(`/blogs/${postslug}-${index}`,{ state:{item} })
    }

    const [blogDetails, setblogDetails] = useState([])

    //api call
    const getBlogDetails = async () => {
        const result = await getBlogDetailsApi()
        // console.log(result);

        if (result.status >= 200 && result.status < 300) {
            setblogDetails(result.data)
        }
    }

    useEffect(() => {
        getBlogDetails()
    }, [])

    return (
        <>
      
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <Row className="w-100 mt-5">
                    { 
                      blogDetails?.length > 0 ?
                        blogDetails.map((item, idx) => (
                            <Col key={`blog-${idx}`} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex">
                                <Card style={{ width: '100%' }} className="card h-100">
                                    <Card.Img
                                        variant="top"
                                        src="https://www.datocms-assets.com/47749/1681485390-ezgif-com-resize-11.png"
                                        style={{ objectFit: 'cover', height: '200px' }}
                                    />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="fw-bold text-dark">{item.title}</Card.Title>
                                            <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                                                { item.metaText }
                                            </Card.Text>
                                        </div>
                                        <Button onClick={()=> {handleMore(item,idx+1)}} variant="" className="btn-outline-secondary">Know more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) :
                        <div className='text-danger text-center'><p>No Blogs</p></div>
                    }
                </Row>
            </Container>
            
        </>
    )
}

export default Cards