import * as React from "react";
import { StateProvider } from "./stateManager";

import CountControls from "./Components/CountControls";
import Header from "./Components/Header";
import Input from "./Components/Input";

enum StateProperties {
  count = "count",
  input = "input"
}

type AppState = {
  [StateProperties.count]: number;
  [StateProperties.input]: string;
};

type Action = {
  property: StateProperties.count | StateProperties.input;
  type?: "increment" | "decrement";
  value: any;
};

const countReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

const inputReducer = (state: AppState, action: Action) => {
  return { ...state, input: action.value };
};

const reducer = (state: AppState, action: Action) => {
  switch (action.property) {
    case "count":
      return countReducer(state, action);

    case "input":
      return inputReducer(state, action);

    default:
      return state;
  }
};

export const App = () => {
  const initialState: AppState = {
    count: 0,
    input: ""
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      <CountControls />
      <Input />
    </StateProvider>
  );
};
