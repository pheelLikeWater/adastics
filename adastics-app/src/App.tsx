import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestDiagram from './test-diagram';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <TestDiagram />

      </header>
    </div>
  );
}

export default App;
