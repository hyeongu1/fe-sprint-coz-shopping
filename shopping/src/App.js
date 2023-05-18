
import { useEffect, useState } from "react";
import React, { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './Pages/main/Main.js'
import './App.css';
import ProductsList from './Pages/producslist/ProductsList';

function App() {

  return (
    <BrowserRouter>
    <Header />
   <Routes>
   <Route path="/" element={<Main />}></Route>
   </Routes>
   <Footer />
   </BrowserRouter>
);
}

export default App;
