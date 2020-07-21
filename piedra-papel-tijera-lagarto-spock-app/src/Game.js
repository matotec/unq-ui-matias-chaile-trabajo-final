import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import BotonJugar from './components/BotonJugar';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import './styles/game.css';
import './styles/botonesJugada.css'

const Game = () => {
    const elecciones = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
    const [eleccionPc, setEleccionPc] = useState('');
    const [eleccionPlayer, setEleccionPlayer] = useState('');
    const [condBotonJugar, setCondBotonJugar] = useState(true)
    const history = useHistory();

    const redirectToPrincipal = () => {
        history.push("/")
    }

    const eligioPlayer = (elec) => {
        setEleccionPlayer(elec)
        setEleccionPc(elecciones[eleccionRandom()])
        setCondBotonJugar(false)
    }

    const resetBotonJugar = () => {
        setCondBotonJugar(true)
    }

    const eleccionRandom = () => {
        return Math.floor((Math.random() * 5))
    }

    return (
        <>
            <Container fluid /* id="pageGame" */>
                <Row >
                    <Col md={12}>
                    <h1 id="eleccionJugador">Elegir jugada</h1>
                    </Col>
                </Row>
                <Row > 
                    <Col md={12} lg={8} className="justify-content-lg-center mx-auto">
                    <Button variant="outline-primary" id="botonPiedra" onClick={() => eligioPlayer('Piedra')}>Piedra</Button>
                    <Button variant="outline-secondary" id="botonPapel" onClick={() => eligioPlayer('Papel')}>Papel</Button>
                    <Button variant="outline-success" id="botonTijera" onClick={() => eligioPlayer('Tijera')}>Tijera</Button>
                    <Button variant="outline-warning" id="botonLagarto" onClick={() => eligioPlayer('Lagarto')}>Lagarto</Button>
                    <Button variant="outline-danger" id="botonSpock" onClick={() => eligioPlayer('Spock')}>Spock</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} lg={2} className="justify-content-lg-center mx-auto">
                    <BotonJugar eleccionPlayer1={eleccionPlayer} eleccionPc={eleccionPc} deshabilitado={condBotonJugar} resetBoton={resetBotonJugar} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} lg={2} className="justify-content-lg-center mx-auto">
                <Button variant="danger" id="exitBoton" onClick={redirectToPrincipal} size="lg" >Salir</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Game;