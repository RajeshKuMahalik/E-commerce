import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Blogs from './pages/Blogs'
import Product from './pages/Product'
import { ToastContainer, toast } from 'react-toastify';
import PlacedOrder from './pages/PlacedOrder'
import Order from './pages/Order'


const App = () => {
  return (
    <div>
    <ToastContainer />
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/collection' element={<Collection/>} />
      <Route path='/products/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<PlacedOrder/>} />
      <Route path='/orders' element={<Order/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App