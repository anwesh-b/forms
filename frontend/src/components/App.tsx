import React from 'react';
import './App.css';

import Router from './Router';

import NavBar from './constants/navbar'

function App() {
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
}

export default App;
