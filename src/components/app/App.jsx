import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from '../../containers';
import Characters from '../../containers/';

export default function App() {
  return (

      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/:character" component={Characters} />
      </Switch>
    </Router>
  );
}