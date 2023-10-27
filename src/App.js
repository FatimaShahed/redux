import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions";

function App() {
    const myState = useSelector((state)=>state.myReducer.counter);
    const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={()=>dispatch(incNumber(10))}>
        Increment
      </button>
      <input type = "text" value ={myState}/>
      <button onClick={()=>dispatch({type: "DECREMENT",payload:10})}>
        Decrement
      </button>
    </div>
  );
}

export default App;
