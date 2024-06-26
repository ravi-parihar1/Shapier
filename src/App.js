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
// import Cart from './Components/Cart';
import Checkout from './Components/Pages/Checkout';
import LoginPage from './Components/Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} active />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/shape' element={<Shape />} />
        <Route path='/store' element={<Store />} />
<<<<<<< HEAD
        <Route path='/product-details/:id' element={<ProductDetails />} />
=======
        <Route path='/product-details' element={<ProductDetails />} />
>>>>>>> 49ee080c07330596d5a45b5c737cd8945eba6434
        {/* <Route path='/cart' element={<Cart />}/> */}
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;