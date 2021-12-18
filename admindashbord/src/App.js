import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import AllCustomer from "./AllCustomer";
import Product from "./Product";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Admin Dashbord</h1>
      <Cart />
      <div className="row ">
        <AllCustomer />
        <Product/>
      </div>

    </div>
  );
}

export default App;
