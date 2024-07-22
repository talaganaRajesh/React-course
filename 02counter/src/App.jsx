import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter]=useState(0)

  // let counter=10;

  const addvalue=()=>{
    console.log("clicked ",Math.random());
    // counter=counter+1;

    if(counter <5)
    {
      setCounter(counter+1);
    }
    else
    {
      console.log("limit exceeded")
    }

    console.log("counter : ",counter);
  }

  const removevalue=()=>{
    if(counter >0)
      {
        setCounter(counter-1);
      }
      else
      {
        console.log("lower limit is zero")
      }
  }

  return (
    <>
      <h1>Chai aur counter </h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br/>
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
