import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

export default function Hero() {
  return (
    <main className='main'>

      <div className='image-gallery'>

        <img className='img1' src='/img1.png'></img>
        <div className='column2'>
          <img className='img2' src='/img2.png'></img>
          <img className='img3' src='/img3.png'></img>
        </div>
        <div className='column3'>
          <img className='img4' src='/img4.png'></img>
          <img className='img5' src='/img5.png'></img>
        </div>

        <div className='column4'>
          <img className='img6' src='/img6.png'></img>
          <img className='img7' src='/img7.png'></img>
        </div>

        <div className='column5'>
          <img className='img8' src='/img8.png'></img>
          <img className='img9' src='/img9.png'></img>
        </div>

      </div>
        <div className="experiences">
            <h1 className='heading'>Online experiences</h1>
            <h4 className='details'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</h4>
        </div>
    </main>
  )
}