import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Game = () => {

    const history = useHistory();

    const redirectToGame = () => {
        history.push("/")
    }

    return (
        <>
            <h1>elegir opciones</h1>
            <Button variant="danger" onClick={redirectToGame} size="lg" >Volver A Jugar</Button>
        </>
    )
}

export default Game;