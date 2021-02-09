import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './characters/CharacterList';
import Character from './characters/Character';
import DetailPage from '../../containers/DetailPage';
import Header from './characters/Header';
//import AllCharacters from './characters/AllCharacters';

export default function App() {



  return (
    <Router>
      <Header name="mine" />
      <Switch>
        {/* <Route
          path="/"
          exact
          render={(routerProps) => <AllCharacters {...routerProps} />}
        /> */}
        <Route exact path="/:characters" component={CharacterList} />
        <Route path="/" component={Character} />
        <Route
          path="/DetailPage/:id"
          exact
          render={(routerProps) => <DetailPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
