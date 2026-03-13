import { useState } from 'react'
import './index.css'
import Card from './components/card'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)
  const msg = [
    'May your wishes load faster than wifi ',
    'May your wishes load faster than wifi ',
    'May your wishes load faster than wifi ',
    'May your wishes load faster than wifi ',
  ]
  return (
    <>
      <div className="bg">
      </div>
      <Card />
    </>
  )
}

export default App
