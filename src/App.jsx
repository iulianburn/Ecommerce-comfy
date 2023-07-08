import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home,About,AuthWrapper,Cart,Checkout,Error,Products,SingleProduct } from './pages'

import PrivateRoute from './pages/PrivateRoute'


function App() {
  return <AuthWrapper>

 <BrowserRouter>
  <Navbar/>
  <Sidebar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={
        <PrivateRoute><Checkout/> </PrivateRoute>
      }/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<SingleProduct/>}/>
      <Route path='*' element={<Error/>}/>
 

    </Routes>
    <Footer/>
  </BrowserRouter>
  </AuthWrapper>
}

export default App
