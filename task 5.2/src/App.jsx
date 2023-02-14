import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './Card'
import './App.css'

function App() {
  

  return (
    <div className="App">
        <Card
      image="https://picsum.photos/300/200"
      title="Card 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#"
    />
    <Card
      image="https://picsum.photos/300/200"
      title="Card 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
      link="#"
    />
    <Card
      image="https://picsum.photos/300/200"
      title="Card 3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
      link="#"
    />
    </div>
  )
}

export default App
