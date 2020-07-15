import React from 'react';
import PrincipalPage from './PrincipalPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PrincipalPage}/>
        <Route path="/game" component={Game}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
