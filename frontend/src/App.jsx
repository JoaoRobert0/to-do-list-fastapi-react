import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css'
import Group from './Group.jsx'

function App() {
  return (
    <Router>
      <div className='global-grid'>
        <div className='sidebar'>
          <ul>
            <li><Link to="/">📝Tasks</Link></li>
            <li><Link to="/home">🏠Home</Link></li>
            <li><Link to="/work">🖥️Work</Link></li>
          </ul>

          <button className='btn-create-group' onClick={() => alert("Create Group!")}>
            Create Group
          </button>
        </div>

        <div className='main'>
          <Group />
        </div>

      </div>
    </Router>
  )
}

export default App
