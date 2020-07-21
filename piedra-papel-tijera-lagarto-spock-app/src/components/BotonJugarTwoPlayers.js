import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ModalTwoPlayersResult from './ModalTwoPlayersResult';

import '../styles/game.css';

const BotonJugarTwoPlayers = ({eleccionPlayer1, eleccionPlayer2, deshabilitado, resetBoton}) => {
    const [showModal, setShowModal] = useState(false)   
    const [resultado, setResultado] = useState('')
    const [scorePlayer1, setScorePlayer1] = useState(0)
    const [scorePlayer2, setScorePlayer2] = useState(0)

    const play = () => {
        let result = definirResultado()
        scoreCant(result) 
        setResultado(result)
        setShowModal(true)  
    }

    const scoreCant = (result) => {
        if(result === 'Win Player1'){
            setScorePlayer1(scorePlayer1 +1)
        }
        if(result === 'Win Player2'){
            setScorePlayer2(scorePlayer2 +1)
        }
    }

    const closeModal = () => {
        setShowModal(false)
        resetBoton()
    }

    const definirResultado = () => {

        if (eleccionPlayer1 === eleccionPlayer2) {
            return 'Draw'
        }
        if (eleccionPlayer1 === 'Piedra') {
            if (eleccionPlayer2 === 'Papel' || eleccionPlayer2 === 'Spock') {
                return 'Win Player2'
            }
            if (eleccionPlayer2 === 'Tijera' || eleccionPlayer2 === 'Lagarto') {
                return 'Win Player1'
            }
        }
        if (eleccionPlayer1 === 'Papel') {
            if (eleccionPlayer2 === 'Piedra' || eleccionPlayer2 === 'Spock') {
                return 'Win Player1'
            }
            if (eleccionPlayer2 === 'Tijera' || eleccionPlayer2 === 'Lagarto') {
                return 'Win Player2'
            }
        }
        if (eleccionPlayer1 === 'Tijera') {
            if (eleccionPlayer2 === 'Piedra' || eleccionPlayer2 === 'Spock') {
                return 'Win Player2'
            }
            if (eleccionPlayer2 === 'Papel' || eleccionPlayer2 === 'Lagarto') {
                return 'Win Player1'
            }
        }
        if (eleccionPlayer1 === 'Lagarto') {
            if (eleccionPlayer2 === 'Piedra' || eleccionPlayer2 === 'Tijera') {
                return 'Win Player2'
            }
            if (eleccionPlayer2 === 'Papel' || eleccionPlayer2 === 'Spock') {
                return 'Win Player1'
            }
        }
        if (eleccionPlayer1 === 'Spock') {
            if (eleccionPlayer2 === 'Piedra' || eleccionPlayer2 === 'Tijera') {
                return 'Win Player1'
            }
            if (eleccionPlayer2 === 'Papel' || eleccionPlayer2 === 'Lagarto') {
                return 'Win Player2'
            }
        }
    }



    console.log("player one eligio", eleccionPlayer1)
    console.log("player two eligio", eleccionPlayer2)
    console.log("el juego salio", resultado)

    return (
        <>
        <Button variant="primary" id="botonPlay" size="lg" onClick={play} disabled={deshabilitado}>Jugar</Button>
        <ModalTwoPlayersResult eleccionPlayerOne={eleccionPlayer1} eleccionPlayerTwo={eleccionPlayer2} result={resultado} showMyModal={showModal} closeModal={closeModal} scorePlayerOne={scorePlayer1} scorePlayerTwo={scorePlayer2}/>
        </>
    )
    

}

export default BotonJugarTwoPlayers;