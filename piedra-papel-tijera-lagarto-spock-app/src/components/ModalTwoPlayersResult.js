import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import '../styles/modalTwoPlays.css';

const ModalTwoPlayersResult = ({ eleccionPlayerOne, eleccionPlayerTwo, result, showMyModal, closeModal, scorePlayerOne, scorePlayerTwo }) => {



    const handleOpen = () => { return true }

    return (
        <Modal  size="lg" show={showMyModal} onHide={handleOpen} centered>
            <Modal.Body id="fondoModal">
                <h4 id="resultado">{result} </h4>
                <Badge pill id="score" variant="primary">
                    Score Player1 
                        <div>
                            {scorePlayerOne}
                        </div>
                </Badge>

                <Badge pill id="score" variant="primary">
                    Score Player2 
                        <div>
                            {scorePlayerTwo}
                        </div>
                </Badge>
                <p id="resultado">
                    Player1 eligio {eleccionPlayerOne}<br />
                    Player2 eligio {eleccionPlayerTwo}
                </p>
            </Modal.Body>
            <Modal.Footer id="fondoFooter">
                <Button id="playAgain" onClick={closeModal}>Volver A jugar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTwoPlayersResult;