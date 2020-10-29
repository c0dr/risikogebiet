import React from 'react';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  </Router>  
  );
}

export default App;
