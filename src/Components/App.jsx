import { useState } from 'react'
import { NavBar } from './Nav/Nav';
import { Body } from './body/Body';
import { Drivers } from './drivers/Drivers';
import { Footer } from './footer/Footer';
import '../Styles/appStyles.css';

function App() {

  return (
    <>
      <div className='NavMainContainer'>
        <NavBar />
      </div>
      <Body />
      <div className='sticky-container'>
        <Drivers />
      </div>
      <Footer />
    </>
  )
}

export default App
