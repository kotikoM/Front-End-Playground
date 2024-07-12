import "./App.css";
import React from "react";
import Product from "./components/product";
import Cart from "./components/cart";

function App() {
  const products = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Cherry", price: 2 },
  ];

  return (
    <>
      <div className="container">
        <div className="products">
          <h1>Store</h1>
          <h2>Products</h2>
          <div className="products-display">
            {products.map((p) => (
              <Product key={p.id} product={p} />
            ))}
          </div>
        </div>

        <div className="cart">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
