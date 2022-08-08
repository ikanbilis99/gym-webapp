import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Report from './routes/Report';
import Getstarted from './routes/Getstarted';
import Technology from './routes/Technology';
import Displayresult from './routes/Displayresult';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='report' element={<Report/>} />
        <Route path='getstarted' element={<Getstarted/>} />
        <Route path='technology' element={<Technology/>} />
        <Route path='displayresult' element={<Displayresult/>} />
      </Routes>
    </BrowserRouter>
  );
}