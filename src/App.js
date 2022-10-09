import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/Home';
import { HomePageV2 } from './Component/Pages/Homev2';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='home-2' element={<HomePageV2/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
