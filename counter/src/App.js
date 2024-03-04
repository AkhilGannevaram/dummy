import {useState} from "react";
import './App.css';

function App() {

  const [c,setCount]=useState(0);
  function add()
  {
    if(c<=24)
    {
   setCount(c+1);
   }
  }
  return (
    <div className="divi">
      <h3 className="h3">Counter:{c}</h3>
      <button onClick={add}>+ </button>
      <button onClick={()=>{
        if(c>=1){
        setCount(c-1)
        }
      }}>-</button>
      <button onClick={()=>{
        setCount(0)
      }}>reset</button>
    </div>
  );
}

export default App;
