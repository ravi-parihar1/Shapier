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
import Shape from './Components/Pages/Shape';
import Store from './Components/Pages/Store';
import ProductDetails from './Components/Pages/ProductDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} active />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/shape' element={<Shape />} />
        <Route path='/store' element={<Store />} />
        <Route path='/product-details' element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
