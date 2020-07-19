import React from 'react';
import PrincipalPage from './PrincipalPage';
import Game from './Game';
import TwoPlayers from './TwoPlayers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PrincipalPage}/>
        <Route path="/game" component={Game}/>
        <Route path="/twoPlayers" component={TwoPlayers}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
