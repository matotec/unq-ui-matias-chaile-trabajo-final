import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const PrincipalPage = () => {
    const history = useHistory();

    const redirectToGame = () => {
        history.push("/game")
    }

    return (
        <>
            <h1>Bienvenido A Piedra,Papel,Tijera,Lagarto y Spock</h1>
            <Button variant="danger" onClick={redirectToGame} size="lg" >Play</Button>
        </>
    );

}

export default PrincipalPage;