import React, { useState } from 'react'
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap'
import '../pages/Card.css'
//import { Link, useNavigate } from 'react-router-dom'

function InfoModal({ show, handleClose, activityDetails  }) {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Title: {activityDetails?.name || 'No Title'}</h5>
        {activityDetails?.details?.description && (
          <p>
            Description: {activityDetails.details.description}
          </p>
        )}
                {activityDetails?.details?.startDate && (
          <p>
            Start Date: {activityDetails.details.startDate}
          </p>
        )}
        {activityDetails?.details?.endDate && (
          <p>
            End Date: {activityDetails.details.endDate}
          </p>
        )}
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
        <Button variant="outline-primary" onClick={handleClose}>Follow</Button>
      </Modal.Footer>
    </Modal>
  )
}

function ExploreCard({ activity }) {
 // const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
<Col xs={12} sm={6} md={4} lg={4} className="mb-4 d-flex">
        <Card style={{ width: '100%' }} className="card h-100">
          <div className='d-flex justify-content-center'>
            <img className="rounded-circle shadow-4-strong border-warning border-2 mt-4 p-1" width={100} alt="avatar2" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan" />
          </div>
          <Card.Title className="fw-bold text-dark text-center">{activity.userId}</Card.Title>
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="fw-bold text-dark ">Title: {activity.name}</Card.Title>
              <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                {activity?.details?.description || 'No description available.'}
              </Card.Text>
            </div>
            <div className='d-flex flex-column flex-sm-row justify-content-between gap-2'>
              <Button variant="" className="btn-outline-dark" onClick={() => setModalShow(true)}>
                Know more
              </Button>
              <Button variant="" className="btn-outline-primary">Follow</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>


      {/* <Container className="d-flex justify-content-center align-items-center flex-column">
        <Row className="w-100 mt-5">
          <Col xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex">
            <Card style={{ width: '100%' }} className="card h-100">
              <div className='d-flex justify-content-center'>
                <img className="rounded-circle shadow-4-strong border-warning border-2 mt-4 p-1" width={100} alt="avatar2" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan" />
              </div>
              <Card.Title className="fw-bold text-dark text-center">{activity.userId}</Card.Title>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-bold text-dark ">Title: {activity.name}</Card.Title>
                  <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                  {activity?.details?.description || 'No description available.'}
                  </Card.Text>
                </div>
                <div className='d-flex justify-content-between'>
                  <Button variant="" className="btn-outline-dark" onClick={() => setModalShow(true)}>
                    Know more
                  </Button>
                  <Button variant="" className="btn-outline-primary">Follow</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <div className='text-danger text-center'><p> 🔃 Refresh Network Error </p></div>
        </Row>
      </Container> */}

      {/* Modal */}
      <InfoModal show={modalShow} handleClose={() => setModalShow(false)} activityDetails={activity} />
    </>
  )
}

export default ExploreCard;
