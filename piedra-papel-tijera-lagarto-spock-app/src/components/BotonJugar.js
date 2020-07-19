import React, { useState, useEffect } from 'react';
import ModalResult from './ModalResult';
import Button from 'react-bootstrap/Button';

const BotonJugar = ({ eleccionPlayer1, eleccionPc, deshabilitado, resetBoton}) => {
    const [showModal, setShowModal] = useState(false)   
    const [resultado, setResultado] = useState('')
    const [scorePlayer1, setScorePlayer1] = useState(0)
    

    const play = () => {        
        let result = definirResultado()
        scoreCant(result)
        setResultado(result)
        setShowModal(true) 
    }

    const definirResultado = () => {

        if (eleccionPlayer1 === eleccionPc) {
            return 'Draw'
        }
        if (eleccionPlayer1 === 'Piedra') {
            if (eleccionPc === 'Papel' || eleccionPc === 'Spock') {
                return 'Lose'
            }
            if (eleccionPc === 'Tijera' || eleccionPc === 'Lagarto') {
                return 'Win'
            }
        }
        if (eleccionPlayer1 === 'Papel') {
            if (eleccionPc === 'Piedra' || eleccionPc === 'Spock') {
                return 'Win'
            }
            if (eleccionPc === 'Tijera' || eleccionPc === 'Lagarto') {
                return 'Lose'
            }
        }
        if (eleccionPlayer1 === 'Tijera') {
            if (eleccionPc === 'Piedra' || eleccionPc === 'Spock') {
                return 'Lose'
            }
            if (eleccionPc === 'Papel' || eleccionPc === 'Lagarto') {
                return 'Win'
            }
        }
        if (eleccionPlayer1 === 'Lagarto') {
            if (eleccionPc === 'Piedra' || eleccionPc === 'Tijera') {
                return 'Lose'
            }
            if (eleccionPc === 'Papel' || eleccionPc === 'Spock') {
                return 'Win'
            }
        }
        if (eleccionPlayer1 === 'Spock') {
            if (eleccionPc === 'Piedra' || eleccionPc === 'Tijera') {
                return 'Win'
            }
            if (eleccionPc === 'Papel' || eleccionPc === 'Lagarto') {
                return 'Lose'
            }
        }
    }

    

    const closeModal = () => {
        setShowModal(false)
        resetBoton()
    }

    const scoreCant = (result) => {
        if(result === 'Win'){
            setScorePlayer1(scorePlayer1 +1)
        }
    }

    console.log("la pc eligio", eleccionPc)
    console.log("you", resultado)

    return (
        <>
            <Button variant="primary" size="lg" onClick={play} disabled={deshabilitado}>Jugar</Button>
            <ModalResult eleccionPlayerOne={eleccionPlayer1} eleccionIA={eleccionPc} result={resultado} showMyModal={showModal} closeModal={closeModal} scorePlayerOne={scorePlayer1}/>
        </>
    )
}

export default BotonJugar;