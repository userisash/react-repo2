import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [num, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Clicker event</h1> 
        <button onClick={() => setCount((num) => num + 1)}>
          count: {num}
        </button>
    </div>
  )
}

export default App
