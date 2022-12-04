import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Product from './modules/main/pages/Product/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page404 } from './shared'
import Home from './modules/main/pages/Home/Home'
import Feedback from './modules/main/pages/Feedback/Feedback'
import Cart from './modules/main/pages/Cart/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter basename={'4p22-final-project-oleg-lyutikov'}>
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/product/:productId'} element={<Product />}></Route>
      <Route path={'/support'} element={<Feedback />}></Route>
      <Route path={'/cart'} element={<Cart />}></Route>
      <Route path={'*'} element={<Page404 />}></Route>
    </Routes>
  </BrowserRouter>
)
