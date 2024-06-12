import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
import FinalBillingPage from './Components/Pages/FinalBillingPage';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BrandPage from './Components/BrandPage';
import CategoriesPage from './Components/Pages/CategoriesPage';
import ExplorePage from './Components/Pages/ExplorePage';
// import Admin from './Components/Admin';
import DetailsPage from './Components/Pages/DetailsPage';

import AdminPanel from './Components/AdminPanel';
import AdminPanelCategories from './Components/AdminPanelCategories';
import AdminPanelSubCategories from './Components/AdminPanelSubCategories';
import UsersPage from './Components/UsersPage';
import AdminPanelBrands from './Components/AdminPanelBrands';
import AdminServiceUpdate from './Components/AdminServiceUpdate';
import AdminBanners from './Components/AdminBanners';
import BecomeASeller from './Components/BecomeASeller';
import RequestAquote from './Components/RequestAquote';
import AdminServiceEnquiry from './Components/AdminServiceEnquiry';
import ShapeSection from './Components/ShapeSection';
import AdminLoginPage from './Components/AdminLoginPage';
import AdminUserInfo from './Components/AdminUserInfo';
import ThankyouPage from './Components/ThankyouPage';
import CartEmpty from './Components/CartEmpty';
 // or wherever your global styles are



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} active />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/service/:link' element={<ServicesPage/>} />
        <Route path='/shape' element={<Shape />} />
        <Route path='/store' element={<Store />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/Billing/:total_amount' element={<FinalBillingPage />} />
        <Route path='/categories/:category_name' element={<CategoriesPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        {/* <Route path='/admin' element={<Admin />} /> */}
        <Route path='/admin' element={<AdminLoginPage />} />
        <Route path='/admin/Users' element={<AdminUserInfo />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='/admin/categories' element={<AdminPanelCategories />} />
        <Route path='/admin/subcategories' element={<AdminPanelSubCategories />} />
        <Route path='/admin/enquiry' element={<UsersPage />} />
        <Route path='/admin/Brands' element={<AdminPanelBrands />} />
        <Route path='/admin/services' element={<AdminServiceUpdate />} />
        <Route path='/admin/Banners' element={<AdminBanners />} />
        <Route path='/details/:subcategory_id' element={<DetailsPage />} />
        <Route path='/BrandPage' element={<BrandPage />} />
        {/* <Route path='/search-results' element={<SearchResults />} /> */}
        <Route path='/seller' element={<BecomeASeller />} />
        <Route path='/shape-section' element={<ShapeSection />} />
        <Route path='/request-quotation' element={<RequestAquote />} />
        <Route path='/admin/service-enquiry' element={<AdminServiceEnquiry />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
        <Route path='/empty-cart' element={<CartEmpty />} />


        {/* <Route path='/allbrand' element={<BrandPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;