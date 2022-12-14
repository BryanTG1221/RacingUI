import { useState } from 'react'
import { NavBar } from './Nav/Nav';
import { Footer } from './footer/Footer';
import { HomePage } from './Home/HomePage';
import { DocsPage } from './Docs/Docs';
import { CrudPage } from './Crud/Crud';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='NavMainContainer'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/'  element={ <HomePage /> }/>
        <Route path='/crud' element={ <CrudPage /> } />
        <Route path='/driver/:name' element={ <CrudPage /> } />
        <Route path='/docs' element={ <DocsPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App