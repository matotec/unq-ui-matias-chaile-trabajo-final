import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const PrincipalPage = () => {
    const history = useHistory();

    const redirectToGame = () => {
        history.push("/game")
    }

    const redirectToGameTwoPlayer = () => {
        history.push("/twoPlayers")
    }

    return (
        <>
            <h1>Bienvenido A Piedra,Papel,Tijera,Lagarto y Spock</h1>
            <Button variant="danger" onClick={redirectToGame} size="lg" >Play VS Computer</Button>
            <div>
            <Button variant="danger" onClick={redirectToGameTwoPlayer} size="lg" >Play1 VS Play2</Button>
            </div>
        </>
    );

}

export default PrincipalPage;