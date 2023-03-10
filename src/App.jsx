import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Profile from './views/Profile';
import Inventory from './views/Inventory';
import CarSingle from './views/CarSingle';
import AddCar from './views/AddCar';
import Drive from './views/Drive';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-light pb-0">
          <div className="container-fluid">
            <ul class="navbar-nav align-items-center gap-4">
              <li class="nav-item"><Link to="/inventory" class="nav-link active link-primary">Inventory</Link></li>
              <li class="nav-item"><Link to="/add-car" class="nav-link active link-primary">Add New Car</Link></li>
              <li class="nav-item"><Link to="/drive/1/0" class="nav-link active link-primary">Drive</Link></li>
              <li class="nav-item"><Link to="/drive/2/0" class="nav-link active link-primary">Drive in the NE area</Link></li>
              <li class="nav-item"><Link to="/drive/3/0" class="nav-link active link-primary">Drive in the SW area</Link></li>
            </ul>
            <ul class="navbar-nav align-items-center gap-4">
              {
                (user.loggedIn) ?
                <>
                <li class="nav-item"><strong>Logged in as:</strong> <Link to="/profile" class="nav-link active link-primary"><strong>{ user.username }</strong></Link></li>
                <li class="nav-item nav-link active"><strong><button onClick={logout}  class="btn btn-danger">Logout</button></strong></li> 
                </> :
                <>
                <li class="nav-item"><strong>(Currently not logged in.)</strong></li>
                <li class="nav-item nav-link active"><strong><button onClick={login} class="btn btn-success">Login</button></strong></li>
                </>
              }
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
              <Route path=":id" element={<Drive track={1} />} />
            </Route>
            <Route path="2">
              <Route path=":id" element={<Drive track={2} x={50} y={50} direction="EAST" />} />
            </Route>
            <Route path="3">
              <Route path=":id" element={<Drive track={3} x={-50} y={-50} direction="SOUTH" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
