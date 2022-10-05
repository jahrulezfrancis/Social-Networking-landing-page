import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/Home';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
