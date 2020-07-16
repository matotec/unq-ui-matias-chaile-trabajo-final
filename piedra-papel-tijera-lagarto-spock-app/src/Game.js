import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import BotonJugar from './components/BotonJugar'
import { useHistory } from 'react-router-dom';

const Game = () => {
    const elecciones = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
    const [eleccionPc, setEleccionPc] = useState('');
    const [eleccionPlayer, setEleccionPlayer] = useState('');
    const history = useHistory();

    const redirectToGame = () => {
        history.push("/")        
    }

    const eligioPlayer = (elec) => {
        setEleccionPlayer(elec)
        setEleccionPc(elecciones[eleccionRandom()])
    }

    const eleccionRandom = () => {
        return Math.floor((Math.random() * 5))
    }

    return (
        <>
            <h1>elegir opciones</h1>
            <Button variant="outline-primary" onClick={()=> eligioPlayer('Piedra')}>Piedra</Button>
            <Button variant="outline-secondary" onClick={()=> eligioPlayer('Papel')}>Papel</Button>
            <Button variant="outline-success" onClick={()=> eligioPlayer('Tijera')}>Tijera</Button>
            <Button variant="outline-warning" onClick={()=> eligioPlayer('Lagarto')}>Lagarto</Button>
            <Button variant="outline-danger" onClick={()=>eligioPlayer('Spock')}>Spock</Button>

            <div>
                <BotonJugar eleccionPlayer1={eleccionPlayer} eleccionPc={eleccionPc}/>
            </div>
            <Button variant="danger" onClick={redirectToGame} size="lg" >Volver A Jugar</Button>
            
        </>
    )
}

export default Game;