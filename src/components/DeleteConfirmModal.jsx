import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function DeleteConfirmModal({show, onClose, onConfirmDelete }) {
    // const [password, setPassword] = useState('');

    // const handleConfirm = () => {
    //     if (onConfirmDelete) {
    //       onConfirmDelete(password);
    //     }
    //     setPassword('');
    //   };

    if (!show) {
        return null;
    }
  return (
    <>
<Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="mb-3">Are you sure you want to delete this activity?</p>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        //value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" 
                //onClick={handleConfirm}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

    {/* <div className="fixed inset-0 bg-gray-600 bg-opacity-20 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
                <p className="text-gray-700 mb-4">Are you sure you want to delete this activity?</p>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                        onClick={handleConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default DeleteConfirmModal