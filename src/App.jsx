import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Inventory from './views/Inventory';
import CarSingle from './views/CarSingle';
import AddCar from './components/AddCar';
import Drive from './components/Drive';
import Refresh from './components/Refresh';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <ul class="navbar-nav gap-5">
              <li class="nav-item"><Link to="/profile" class="nav-link active">Profile</Link></li>
              <li class="nav-item"><Link to="/inventory" class="nav-link active">Inventory</Link></li>
              <li class="nav-item"><Link to="/add-car" class="nav-link active">Add New Car</Link></li>
              <li class="nav-item"><Link to="/drive/1/0" class="nav-link active">Drive</Link></li>
              <li class="nav-item"><Link to="/drive/2/0" class="nav-link active">Drive in the NE area</Link></li>
              <li class="nav-item"><Link to="/drive/3/0" class="nav-link active">Drive in the SW area</Link></li>
            </ul>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<h1><strong>Welcome to the Garage!</strong></h1>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory">
            <Route path="" element={<Inventory />}/>
            <Route path=":id" element={<CarSingle />}/>
          </Route>
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/drive">
            <Route path="1">
              <Route path=":id" element={<><Refresh /><Drive track={1} /></>} />
            </Route>
            <Route path="2">
              <Route path=":id" element={<><Refresh /><Drive track={2} x={50} y={50} direction="EAST" /></>} />
            </Route>
            <Route path="3">
              <Route path=":id" element={<><Refresh /><Drive track={3} x={-50} y={-50} direction="SOUTH" /></>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
