import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function BlogDetail({ }) {
    const location = useLocation();
    // const {title, text} = state ;
    const { item } = location.state || {};
    const { title, londes } = item

    const imgsrc = `https://www.datocms-assets.com/47749/1669927482-60-quotes-on-procrastination.jpg?auto=compress%2Cformat&q=60`
    return (
        <>
            <div className=" lg:w-7/12 mx-auto px-[30px] my-5" >
                <Row className="text-center justify-content-center mb-4">
                    <Col xs={12}  className="mb-4" >
                        <h1>{title}</h1>
                    </Col>

                    <Col xs={12} md={8} lg={8} className="mb-5">
                        <img
                            src={imgsrc}
                            alt="no image"
                        />
                    </Col>

                    <Col xs={12}>
                        <p className="text-center" style={{ textAlign: 'justify', fontSize: 'clamp(1rem, 2vw, 1.4rem)' }} >
                            {londes}
                        </p>
                    </Col>
                </Row>
           </div>
        </>
    )
}

export default BlogDetail