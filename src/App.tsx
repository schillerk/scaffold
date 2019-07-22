import * as React from "react";
import { StateProvider } from "Core/stateManager";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { css, withStyles, withStylesProps } from "Core/withStyles";

import SummaryPage from "Components/SummaryPage";
import TimelinePage from "Components/TimelinePage";

import SideBar from "Shared/SideBar";
import Button from "Shared/Button";
import Spacing from "Shared/Spacing";

import { Datum, MOCK_DATA } from "./mockData";

enum StateProperties {
  count = "count",
  input = "input",
  data = "data"
}

type AppState = {
  [StateProperties.count]: number;
  [StateProperties.input]: string;
  [StateProperties.data]: Datum[];
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

const initialState: AppState = {
  count: 0,
  input: "",
  data: MOCK_DATA
};

function App({ styles }: withStylesProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <div {...css(styles.app)}>
          <SideBar>
            <Spacing all={1}>
              <Button borderless inverted>
                <Link to="/summary">Summary</Link>
              </Button>
            </Spacing>
            <Spacing all={1}>
              <Button borderless inverted>
                <Link to="/timeline">Timeline</Link>
              </Button>
            </Spacing>
            <Spacing all={1}>
              <Button inverted>Timeline</Button>
            </Spacing>
            <Spacing all={1}>
              <Button>Timeline</Button>
            </Spacing>
          </SideBar>
          <Spacing all={3}>
            <Switch>
              <Route exact path="/summary" component={SummaryPage} />
              <Route exact path="/timeline" component={TimelinePage} />
            </Switch>
          </Spacing>
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default withStyles(() => ({
  app: {
    height: "100%",
    width: "100%",
    display: "inline-flex"
  }
}))(App);
