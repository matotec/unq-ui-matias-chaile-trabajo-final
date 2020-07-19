import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ModalResult = ({ eleccionPlayerOne, eleccionIA, result, showMyModal, closeModal, scorePlayerOne}) => {

    

    const handleOpen = () => { return true }

    return (
        <Modal size="lg" show={showMyModal} onHide={handleOpen} centered>
            <Modal.Body>               
                <h4>You {result} </h4>
                    <Badge pill variant="primary">
                    Score {scorePlayerOne}
                    </Badge>
                
                    
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