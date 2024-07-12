import React from "react";
import "../style/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../slice/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="items">
            {items.map((item) => (
              <div key={item.id} className="item">
                <h4>{item.name}</h4>
                <p>Price : {item.price}</p>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => dispatch(clearCart())} className="button-clear">Clear cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
