import * as React from "react";
import { StateProvider } from "./state";

import Header from "./Components/Header";

type AppState = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
};

export const App = () => {
  const initialState = {
    count: 0
  };

  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header title="Hello World" />
    </StateProvider>
  );
};
