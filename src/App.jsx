import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LoginPage from './pages/LoginPages'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage';
import CartProvider from './context/cartContext'
import ProductList from './pages/ProductList'
import About from './pages/About'
import ContactUs from './pages/Contact'
import Checkout from './pages/Checkout'
import AuthPage from './pages/AuthPage'

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <CartProvider>
      <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path="/" element={<AuthPage />} /> */}
            <Route path='/collection' element={<ProductList/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path="/login" element={<LoginPage/>}/> 
            <Route path="/register" element={<Register/>}/> 
          </Routes>
        </main>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
