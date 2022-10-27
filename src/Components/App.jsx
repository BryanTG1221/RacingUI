import { useState } from 'react'
import { NavBar } from './Nav/Nav';
import { Body } from './body/Body';
import { Drivers } from './drivers/Drivers';
import { Footer } from './footer/Footer';

function App() {

  return (
    <>
      <div className='NavMainContainer'>
        <NavBar />
      </div>
      <Body />
      <Drivers />
      <Footer />
    </>
  )
}

export default App
