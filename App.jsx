import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Card.css'

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setShow(true)}>show</button>
        <button onClick={() => setShow(false)}>Hide</button>
        {show ? <div className="fill"></div> : null}
      </div>
    </div>
  );
}

export default App;