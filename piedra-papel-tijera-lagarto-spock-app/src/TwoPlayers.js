import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import BotonJugarTwoPlayers from './components/BotonJugarTwoPlayers';
import { useHistory } from 'react-router-dom';

import './styles/game.css';
import './styles/botonesJugada.css'

const TwoPlayers = () => {
    const [eleccionPlayer1, setEleccionPlayer1] = useState('');
    const [eleccionPlayer2, setEleccionPlayer2] = useState('');
    const [condBotonJugar, setCondBotonJugar] = useState(true);
    const [condBotonJugadaP1, setCondBotonJugadaP1] = useState(false);
    const [condBotonJugadaP2, setCondBotonJugadaP2] = useState(false);
    const history = useHistory();

    const redirectToPrincipal = () => {
        history.push("/")
    }

    const eleccionPlayerOne = (elec) => {
        setEleccionPlayer1(elec)
        setCondBotonJugadaP1(true)
        enabledBotonJugar()
    }

    const eleccionPlayerTwo = (elec) => {
        setEleccionPlayer2(elec)
        setCondBotonJugadaP2(true)
        enabledBotonJugar()
    }

    const enabledBotonJugar = () => {
        if( condBotonJugadaP1 || condBotonJugadaP2 )
            setCondBotonJugar(false)            
    }
    /* console.log(condBotonJugadaP1)
    console.log(condBotonJugadaP2)
    console.log(condBotonJugar) */
    const resetBotonJugar = () => {
        setCondBotonJugar(true)
        setCondBotonJugadaP1(false)
        setCondBotonJugadaP2(false)
    }

    return (
        <>
            <Container fluid /* id="pageGame" */>
            <h1 id="eleccionJugador">Player1 elegir jugada</h1>
            <Button variant="outline-primary" id="botonPiedra" onClick={() =>{eleccionPlayerOne('Piedra')}} disabled={condBotonJugadaP1}>Piedra</Button>
            <Button variant="outline-secondary" id="botonPapel" onClick={() =>{eleccionPlayerOne('Papel')}} disabled={condBotonJugadaP1}>Papel</Button>
            <Button variant="outline-success" id="botonTijera" onClick={() =>{eleccionPlayerOne('Tijera')}} disabled={condBotonJugadaP1}>Tijera</Button>
            <Button variant="outline-warning" id="botonLagarto" onClick={() =>{eleccionPlayerOne('Lagarto')}} disabled={condBotonJugadaP1}>Lagarto</Button>
            <Button variant="outline-danger" id="botonSpock" onClick={() =>{eleccionPlayerOne('Spock')}} disabled={condBotonJugadaP1}>Spock</Button>

            <h1 id="eleccionJugador">Player2 elegir jugada</h1>
            <Button variant="outline-primary" id="botonPiedra" onClick={() =>{eleccionPlayerTwo('Piedra')}} disabled={condBotonJugadaP2}>Piedra</Button>
            <Button variant="outline-secondary" id="botonPapel" onClick={() =>{eleccionPlayerTwo('Papel')}} disabled={condBotonJugadaP2}>Papel</Button>
            <Button variant="outline-success" id="botonTijera" onClick={() =>{eleccionPlayerTwo('Tijera')}} disabled={condBotonJugadaP2}>Tijera</Button>
            <Button variant="outline-warning" id="botonLagarto" onClick={() =>{eleccionPlayerTwo('Lagarto')}} disabled={condBotonJugadaP2}>Lagarto</Button>
            <Button variant="outline-danger" id="botonSpock" onClick={() =>{eleccionPlayerTwo('Spock')}} disabled={condBotonJugadaP2}>Spock</Button>
            <div>
            <BotonJugarTwoPlayers eleccionPlayer1={eleccionPlayer1} eleccionPlayer2={eleccionPlayer2} deshabilitado={condBotonJugar} resetBoton={resetBotonJugar}/>
            </div>
            
            <div>
            <Button variant="danger" id="exitBoton" onClick={redirectToPrincipal} size="lg" >Salir</Button>
            </div>
            </Container>
        </>
    )
}

export default TwoPlayers;