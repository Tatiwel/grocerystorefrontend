import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './Components/Navbar.jsx';
import Home from './Views/HomePage/Home.jsx';
import Login from './Views/HomePage/Login.jsx';
import Register from './Views/Register/Register.jsx';
import Product from './Views/Product/Product.jsx';
import Order from './Views/Order/Order.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* User */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/User" element={<UserHome />} /> */}
        {/* <Route path="/User/update/:id" element={<UserUpdate />} /> */}
        {/* Product */}
        {<Route path="/product" element={<Product />} />}
        {<Route path="/order" element={<Order />} />}
        {/* {<Route path="/product/update/:id" element={<ProductUpdate />} />} */}
        {/* Category */}
        {/* <Route path="/category" element={<Category />} /> */}
        {/* {<Route path="/category/register" element={<CategoryRegister />} /> */}
        {/* {<Route path="/category/update/:id" element={<CategoryUpdate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
