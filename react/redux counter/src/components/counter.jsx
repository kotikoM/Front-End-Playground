import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../components/counterSlice";

function counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <button onClick={() => dispatch(reset())} className="reset">
        Reset
      </button>
    </>
  );
}

export default counter;
