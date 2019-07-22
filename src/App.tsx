import * as React from "react";
import { StateProvider } from "Core/stateManager";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import SideBar from "Shared/SideBar";
import Button from "Shared/Button";
import Spacing from "Shared/Spacing";
import SummaryPage from "Components/SummaryPage";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/summary" component={SummaryPage} />
        </Switch>
        <SideBar>
          <Spacing all={1}>
            <Button borderless inverted>
              <Link to="/summary">Summary</Link>
            </Button>
          </Spacing>
          <Spacing all={1}>
            <Button inverted>Timeline</Button>
          </Spacing>
          <Spacing all={1}>
            <Button>Timeline</Button>
          </Spacing>
        </SideBar>
      </BrowserRouter>
    </StateProvider>
  );
};
