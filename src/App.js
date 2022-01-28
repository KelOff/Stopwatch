import './App.css';
import React from 'react';

import Calc from './rxjs/rxjs'

function App() {

  return (
    <div className="App">
      <Calc />
      
      {/* <h1> {counter } </h1> */}
      <button>Start</button>
      <button>Stop</button>
      <button></button>
    </div>
  );
}

export default App;
