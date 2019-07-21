import * as React from "react";
import { createContext, useState, useReducer } from "react";
import Header from "./Components/Header";

export const StateContext = createContext({
  counter: 0
});

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const App = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <StateContext.Provider value={{ counter: 0 }}>
      <Header title="Hello World" />
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </StateContext.Provider>
  );
};
