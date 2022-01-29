import React from 'react';

const Time = ({ iterator }) => {
  const time =   (new Date(iterator * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[ 0 ] 
  const arr = time.split('')
  const hours = arr[ 0 ] + arr[ 1 ]
  const minutes = arr[ 3 ] + arr[ 4 ]
  const seconds = arr[ 6 ] + arr[ 7 ]
  return (
    <h1 className='time'>
      <span className='hours'>{hours}</span>:
      <span className='minutes'>{minutes}</span>:
      <span className='seconds'>{seconds}</span> </h1>
  )
}

export default Time