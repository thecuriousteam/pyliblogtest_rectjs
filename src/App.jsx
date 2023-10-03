import { useState } from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/django/Intro';
import Home from './pages/Home';
import Basic from './pages/django/Basic';

function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />

        <div className='container'>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/intro' element={<Intro />} />
            <Route path='/basic' element={<Basic />} />
           
            {/* Add more routes for other pages as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
