import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Login from './component/login';
import Register from './component/register';
import Home from './component/home';
import Bike from './component/bike';
import Scotty from './component/scotty';
import Escooty from './component/evehicle';
import Detail from './component/detail';
import Booking from './component/booking';
import Final from './component/final';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes> 
          <Route path='/Register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Bike' element={<Bike/>}></Route>
          <Route path='/Scooty' element={<Scotty/>}></Route>
          <Route path='/Escooty' element={<Escooty/>}></Route>
          <Route path="/detail/:name" element={<Detail />} />
          <Route path='/Booking' element={<Booking/>}></Route>
          <Route path ='/Final' element={<Final/>}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
