import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [background, setBgColor] = useState('')
  
  return (
      
      <div className="bgchanger" style={{ backgroundColor:background }}>
        <input type="color" value={background}  onChange={(e)=>{setBgColor(e.target.value)}}  ></input>
        </div>
        
  )
}

export default App
