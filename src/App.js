import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Contact from './routes/Contact';
import Getstarted from './routes/Getstarted';
import Technology from './routes/Technology';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='getstarted' element={<Getstarted/>} />
        <Route path='technology' element={<Technology/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
