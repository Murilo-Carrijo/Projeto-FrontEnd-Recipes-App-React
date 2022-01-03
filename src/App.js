import React from 'react';
import Provider from './context/MyProvider';
import Routes from './routes';
import RenderHeader from './renderHeader';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <RenderHeader />
      <Routes />
    </Provider>
  );
}

export default App;
