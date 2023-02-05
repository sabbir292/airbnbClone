import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Hero from './Hero'
import NewCard from './NewCard'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
      <Header/>
      <Hero/>
     <NewCard/>
   
  </React.StrictMode>
)
