import React from 'react'
import { Col, Card, Button, Modal } from 'react-bootstrap'
//import '../pages/Card.css'
import { Link } from 'react-router-dom'

function ExploreCard({ activity, openModal  }) {

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={4} className="mb-4 d-flex">
        <Card style={{ width: '100%',height:'auto' }} className="card h-100">

          <div className='d-flex justify-content-center ' >
            <Link to={`/u/${activity.userId}`} reloadDocument>
              <img className="rounded-circle shadow-4-strong border-warning border-2 mt-4 p-1" width={100} alt="avatar2" src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${activity.picture}`} />
              <Card.Title className="fw-bold text-dark text-center no-underline">{activity.userId}</Card.Title>
            </Link>
          </div>

          <Card.Body className="d-flex flex-column justify-content-between" style={{ paddingRight: '5rem' }} >
            <div>
              <Card.Title className="fw-bold text-dark ">Title: {activity.name}</Card.Title>
              <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                {activity?.details?.description || 'No description available.'}
              </Card.Text>
            </div>
            <div className='d-flex flex-column flex-sm-row justify-content-between gap-2'>
              <Button variant="" className="btn-outline-dark" onClick={() => openModal(activity)} >
                Know more
              </Button>
              <Button variant="" className="btn-outline-primary">Follow</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </>
  )
}

export default ExploreCard;