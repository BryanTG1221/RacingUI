import { useState } from 'react'
import { NavBar } from './Nav/Nav';
import { Body } from './body/Body';

function App() {

  return (
    <>
      <div className='NavMainContainer'>
        <NavBar />
      </div>
      <Body />
    </>
  )
}

export default App
