import { useState } from 'react'
import { NavBar } from './Nav/Nav';
import { Body } from './body/Body';
import { Drivers } from './drivers/Drivers';

function App() {

  return (
    <>
      <div className='NavMainContainer'>
        <NavBar />
      </div>
      <Body />
      <Drivers />
    </>
  )
}

export default App
