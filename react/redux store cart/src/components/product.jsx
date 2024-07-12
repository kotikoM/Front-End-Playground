import React from "react";
import "../style/product.css"
import { useDispatch } from "react-redux";
import { addItem } from '../slice/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price : {product.price}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
};

export default Product;
