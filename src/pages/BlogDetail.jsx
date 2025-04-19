import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams , useLocation } from 'react-router-dom'

function BlogDetail() {
    const { blogslug } = useParams();
    const location = useLocation();
    // const {title, text} = state ;
    const { item } = location.state || {} ;
    const { title , text } = item

    const imgsrc = `https://www.datocms-assets.com/47749/1669927482-60-quotes-on-procrastination.jpg?auto=compress%2Cformat&q=60`
    return (
        <>
            <div className=" lg:w-7/12 mx-auto px-[30px] my-5" >
                <Row className="text-center mb-4">
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={8} lg={8}>
                        <img
                            src={ imgsrc }
                            alt="no image"
                        />
                    </Col>
                </Row>


                <Row className="mb-5">
                    <Col>
                        <p className="text-center" style={{textAlign:'justify' ,fontSize: 'clamp(1rem, 2vw, 1.4rem)'}} >
                            {text}
                        </p>
                    </Col>
                </Row>


                <Row className="text-center mb-3">
                    <Col>
                        <h2>Built-In Accountability Partners to Keep You on Track</h2>
                    </Col>
                </Row>


                <Row>
                    <Col >
                        <p className="text-center" style={{textAlign:'justify' ,fontSize: 'clamp(1rem, 2vw, 1.4rem)'}}>
                            Ever noticed how it’s easier to work out when you’ve got a gym buddy? Virtual coworking works the same way. When you’re working alongside others (even if it’s through a screen), you’re less likely to get distracted. By knowing that other people are there to focus, you feel the same pressure to stay productive.

                            Having a virtual coworking buddy or group can create a powerful effect called “body doubling.” Essentially, just by being “with” someone who’s also working, your mind associates their presence with focus. In virtual coworking, accountability becomes the silent motivator.
                        </p>
                    </Col>
                </Row>
            </div>


        </>
    )
}

export default BlogDetail