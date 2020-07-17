import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

const ModalResult = ({ eleccionPlayerOne, eleccionIA, result, showMyModal, closeModal}) => {

    const [showModal, setShowModal] = useState(false)  

    const handleOpen = () => setShowModal(true)


    /* const closeModal = () => showMyModal = false  */



    return (
        <Modal size="lg" show={showMyModal} onHide={handleOpen} centered>
            <Modal.Body>
                <h4>You {result} </h4>
                <p>
                    Player1 eligio {eleccionPlayerOne}<br />
                    Pc eligio {eleccionIA}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Volver A jugar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalResult;