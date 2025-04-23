import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';

function InfoModal({show, handleClose, activityDetails}) {

    useEffect(() => {
        console.log("InfoModal show prop:", show);
      }, [show]);
  return (
    <>
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
    </>
  )
}

export default InfoModal