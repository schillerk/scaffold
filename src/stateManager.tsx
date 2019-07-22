import * as React from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  reducer: any;
  initialState: {};
  children: React.ReactNode;
};

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }: State) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
