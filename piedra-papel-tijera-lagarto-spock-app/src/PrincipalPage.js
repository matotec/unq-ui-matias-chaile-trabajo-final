import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import sonidoJuego from './imagesAndAudio/audioApertura.mp3';
import imagenSheldon from './imagesAndAudio/sheldon-cooper-the-big-bang-theory.png';

import './styles/principalPage.css';
import { useHistory } from 'react-router-dom';

const PrincipalPage = () => {
    const audio = new Audio(sonidoJuego);
    audio.autoplay = true;
    audio.volume = 0.2;
    const history = useHistory();

    const redirectToGame = () => {
        history.push("/game")
    }

    const redirectToGameTwoPlayer = () => {
        history.push("/twoPlayers")
    }

    return (
        <>
            <Container /* id="pagePrincipal" */ fluid>
                <Row >
                    <Col>
                        <h1 id="tituloGame">Bienvenido A Piedra,Papel,Tijera,Lagarto y Spock</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" >
                    <Col  >
                        <Image id="imagenSheldon" src={imagenSheldon} roundedCircle />
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5" >
                <Col  >
                <Button variant="danger" id="versusPc" onClick={redirectToGame} size="lg">Computer</Button>                
                <Button variant="danger" id="twoPlayers" onClick={redirectToGameTwoPlayer} size="lg" >Player1 VS Player2</Button>
                </Col>
                </Row>
            </Container>
        </>
    );

}

export default PrincipalPage;