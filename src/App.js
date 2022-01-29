import './App.css';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import Time from './Components/Time'
import Buttons from './Components/Buttons'

function App() {
  const [ iterator, setIterator ] = useState(0)
  const [ started, setStarted ] = useState(false)
  const [ click, setClick ] = useState (0)
    
  useEffect(() => {
    const stream$ = new Observable(observer => {
      setInterval(() => {
        observer.next()
      }, 1000);
    }).subscribe( () => {
      if (started) setIterator(prev => prev + 1);
    })
    return () => stream$.unsubscribe();
  }, [ started ] )

  const handleStart = () => {
    setStarted(!started)
    if (started) setIterator(0)
  }

  const handleReset = () => {
    setIterator(0)
    setStarted(true)
  }

  const handlePause = () => {
    if (started) {
      setClick(click + 1);
      if (click + 1 === 1) {
        setTimeout(() => {
          setClick(0);
        }, 300);
      } else if (click + 1 === 2) {
        setClick(0);
        setStarted(false);
      } else {
        setClick(0);
      }
    }
  }

  return (
    <div className="App">
      <Time 
        iterator = { iterator }
      />
      <Buttons 
        iterator={ iterator }
        started={ started }
        handleStart={ handleStart }
        handleReset={ handleReset }
        handlePause={ handlePause }
      />
    </div>
  );
}

export default App;
