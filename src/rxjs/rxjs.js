import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

function Calc () {
  // let result = '0'
  const [ result, setResult ] = useState(0)

  const getResult = (value) => {
    setResult(value)
    // return result = value
  }
    
  const stream$ = new Observable(observer => {
    let counter = 0
    setInterval(() => {
      observer.next(counter++)
    }, 1000)
  })
  .pipe(
      map(v => { return (new Date(v * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[ 0 ] })  
  )  
 
  stream$.subscribe( v => {
    console.log(v);
    getResult(v)
  })
  console.log(result);
  
  return (
    <div id='qwe'>{ result }</div>
  )
}

export default Calc;
