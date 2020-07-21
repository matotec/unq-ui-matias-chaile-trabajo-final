import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import '../styles/modalTwoPlays.css';

const ModalResult = ({ eleccionPlayerOne, eleccionIA, result, showMyModal, closeModal, scorePlayerOne}) => {

    

    const handleOpen = () => { return true }

    return (
        <Modal size="lg" show={showMyModal} onHide={handleOpen} centered>
            <Modal.Body id="fondoModal">               
                <h4 id="resultado">You {result} </h4>
                    <Badge pill id="score" variant="primary">
                    Score {scorePlayerOne}
                    </Badge>
                
                    
                <p id="resultado">
                    Player1 eligio {eleccionPlayerOne}<br />
                    Pc eligio {eleccionIA}
                </p>
            </Modal.Body>
            <Modal.Footer id="fondoFooter">
                <Button id="playAgain" onClick={closeModal}>Volver A jugar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalResult;