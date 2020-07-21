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
    audio.volume = 0.2;
    const history = useHistory();

    const redirectToGame = () => {
        history.push("/game")
        audio.play()
    }

    const redirectToGameTwoPlayer = () => {
        history.push("/twoPlayers")
        audio.play()
    }

    return (
        <>
            <Container /* id="pagePrincipal" */ fluid>
                <Row >
                    <Col  /* xs={12} */  /* sm={4} */ md={12} className="justify-content-lg-center mx-auto">
                        <h1 id="tituloGame">Bienvenido A Piedra,Papel,Tijera,Lagarto y Spock</h1>
                    </Col>
                </Row>
                <Row >
                    <Col  md={4} xl={3} lg={5} className="justify-content-lg-center mx-auto" >
                        <Image id="imagenSheldon" src={imagenSheldon} roundedCircle />
                    </Col>
                </Row>
                <Row >
                <Col md={4} xl={5} lg={5} className="justify-content-lg-center mx-auto" >
                <Button variant="danger" id="versusPc" onClick={redirectToGame} size="lg">Computer</Button>                
                <Button variant="danger" id="twoPlayers" onClick={redirectToGameTwoPlayer} size="lg" >Player1 VS Player2</Button>
                </Col>
                </Row>
            </Container>
        </>
    );

}

export default PrincipalPage;