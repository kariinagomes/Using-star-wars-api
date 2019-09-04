import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import CharacterView from './Pages/CharacterView';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path="/people/:id" component={CharacterView} />
      </Switch>
    </Router>
  );
}

export default App;
