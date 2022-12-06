import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

import Productdetailpage from "../pages/Productdetailpage";


const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/product/:id' element= {<Productdetailpage/>} ></Route>
      <Route path='/product' element= {<Product/>} ></Route>
      <Route path='/cart' element= {<Cart/>} ></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
