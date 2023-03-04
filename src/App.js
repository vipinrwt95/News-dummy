import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="NewsDetails" element={<NewsDetails/>} />
     </Routes>
     
    </div>
  );
}

export default App;
