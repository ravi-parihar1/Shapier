import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/HomePage';
import ContactPage from './Components/Pages/ContactPage';
import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/Pages/HomePage';
import ServicesPage from './Components/Pages/ServicesPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} active />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
