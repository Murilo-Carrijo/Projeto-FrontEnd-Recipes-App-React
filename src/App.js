import React from 'react';
import { Route, Switch } from 'react-router';
import Provider from './context/MyProvider';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import Login from './pages/Login';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/bebidas" component={ Drinks } />
      </Switch>
    </Provider>
  );
}

export default App;
