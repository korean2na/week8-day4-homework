import logo from './logo.svg';
import './App.css';
import Inventory from './views/Inventory';
import CarSingle from './views/CarSingle';
import Profile from './components/Profile';
import Drive from './components/Drive';
import Refresh from './components/Refresh';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/drive1/0">Drive</Link></li>
            <li><Link to="/drive2/0">Drive in the NE area</Link></li>
            <li><Link to="/drive3/0">Drive in the SW area</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Garage!</h1>} />
          <Route path="/inventory">
            <Route path="" element={<Inventory />}/>
            <Route path=":id" element={<CarSingle />}/>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/drive1">
            <Route path=":id" element={<><Refresh /><Drive /></>} />
          </Route>
          <Route path="/drive2">
            <Route path=":id" element={<><Refresh /><Drive x={50} y={50} direction="EAST" /></>} />
          </Route>
          <Route path="/drive3">
            <Route path=":id" element={<><Refresh /><Drive x={-50} y={-50} direction="SOUTH" /></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
