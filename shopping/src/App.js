
import React, { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './Pages/main/Main.js'
import './App.css';

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
