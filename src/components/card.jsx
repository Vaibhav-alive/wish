import React from 'react'
import { useState, useEffect } from 'react'
import gem from '../assets/gr-12.svg'
import Main from './main'

const Card = (props) => {
  const [name, setName] = useState('')
  const [start, setStart] = useState(false) 
  const msg  = [
    {
      l: gem,
      m: 'Stepping Into Brighter Days Ahead',
      d: 'May the coming year fill your world with laughter, meaningful connections, and unforgettable memories'
    },

    {
      l: gem,
      m: 'Here’s to another year of',
      d: 'unexpected wins, loud laughter, and memories you didn’t see coming.'
    },
    {
      l: gem,
      m: 'A New Chapter Begins Today',
      d: 'May this year bring new experiences, genuine smiles, and moments that remind you how beautiful life can be'
    },
    {
      l: gem,
      m: 'May your Wishes load Faster than your wifi',
      d: ''
    }
  ]
  useEffect(()=>{
    if (start){
      document.body.style.overflow = 'auto'
    }
    else{
      document.body.style.overflow = 'hidden'
    }
  }, [start])
  const startPlay = () => {
    setStart(true)
  }
  return (
    <>
      {
        !start && (
          <div className='card'>
            <div className="logo">
              <img src={gem} alt="" />
            </div>
            <h1 className="head">
              Sup, How do you do??
            </h1>
            <div className="desc">
              Enter your name to start the experience
            </div>
            <div className="main">
              <input type="text" className="name" placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
              <button className={name.length > 0 ? 'active' : ''} disabled={!name.length} onClick={startPlay}>Start the exp</button>
            </div>
          </div>

        )

      }
      {
        start && (
          <div className='main-page'>
            {
              msg.map((e)=>(
                <Main ms = {e.m} l = {e.l} d = {e.d} />
              ))
            }
            <div className="l-card">Happy birthday {name} 🎂🎂</div>
          </div>
        )

      }


    </>
  )
}

export default Card