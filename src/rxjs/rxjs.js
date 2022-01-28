import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
 
function Calc () {
  
  const [ result, setResult ] = useState(0)
  useEffect(() => {
    setAsds(result)
  }, [ counter ])
  
  const stream$ = new Observable(observer => {
    let counter = 0
    setInterval(() => {
      observer.next(counter++)
    }, 1000)
  })
  .pipe(
      // map(v => { return (new Date(v * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[ 0 ] })  
  )  
 
  stream$.subscribe( v => {
    setResult(v)
  })
  // console.log(result);
  return (
    <h1>{ result }</h1>
  )
}

export default Calc;
