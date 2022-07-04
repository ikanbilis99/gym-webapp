import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Contact from './routes/Contact';
import Getstarted from './routes/Getstarted';
import Technology from './routes/Technology';
import Displayresult from './routes/Displayresult';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='getstarted' element={<Getstarted/>} />
        <Route path='technology' element={<Technology/>} />
        <Route path='displayresult' element={<Displayresult/>} />
      </Routes>
    </BrowserRouter>
  );
}