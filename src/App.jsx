import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Inventory from './components/Inventory';
import Profile from './components/Profile';
import Drive from './components/Drive';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/drive1">Drive</Link></li>
            <li><Link to="/drive2">Drive in the NE area</Link></li>
            <li><Link to="/drive3">Drive in the SW area</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Garage!</h1>} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/drive1" element={<Drive />} />
          <Route path="/drive2" element={<Drive x={50} y={50} direction="EAST" />} />
          <Route path="/drive3" element={<Drive x={-50} y={-50} direction="SOUTH" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
