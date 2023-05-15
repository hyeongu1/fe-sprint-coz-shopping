import React, { BrowserRouter, Routes, Route } from 'react'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './Pages/main/Main'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <Header />
   <Routes>
   <Route path="/" element={<Main />} />
   </Routes>
   <Footer />
   </div>
   </BrowserRouter>
);
}

export default App;
