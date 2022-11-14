import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './Components/Navbar.jsx';
import Home from './Views/HomePage/Home.jsx';
import Login from './Views/HomePage/Login.jsx';
import Register from './Views/User/Register.jsx';
import Category from './Views/Category/Category.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* User */}
        <Route path="/user/register" element={<Register />} />
        {/* <Route path="/User" element={<UserHome />} /> */}
        {/* <Route path="/User/update/:id" element={<UserUpdate />} /> */}
        {/* Product */}
        {/* <Route path="/product" element={<ProductHome />} />
          <Route path="/product/register" element={<ProductRegister />} />
          <Route path="/product/update/:id" element={<ProductUpdate />} /> */}
        {/* Category */}
        <Route path="/category" element={<Category />} />
        {/* {<Route path="/category/register" element={<CategoryRegister />} /> */}
        {/* {<Route path="/category/update/:id" element={<CategoryUpdate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
