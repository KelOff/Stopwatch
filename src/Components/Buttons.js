import React from 'react';

const Buttons =( { handleStart, handleReset, handlePause, started, iterator } ) => (
  <div className='buttons'>
    <button onClick={ handleStart } className={ started ? 'stop' : 'start' }>
      {started ? 'Stop' : 'Start'}
    </button>
    <button onClick={ handlePause } className='pause'>
      Pause
    </button>
    <button onClick={ handleReset } className='reset' disabled={ started || iterator > 0 ? false : true }>
      Reset
    </button>
  </div>
)

export default Buttons