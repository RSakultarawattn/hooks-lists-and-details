import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Character from './characters/Character';
import DetailPage from '../../containers/DetailPage';
import Header from './characters/Header';
import AllCharacters from './characters/AllCharacters';


export default function App() {



  return (
    <Router>
      <Header name="mine" />
      <Switch>
        
        <Route exact path="/" component={AllCharacters} />
        
        <Route
          path="/DetailPage/:id"
          render={(routerProps) => <DetailPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
