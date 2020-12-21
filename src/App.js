import React from "react";
import "./App.css";
import Main from "./Main";
import SelectViewer from "./Components/SelectViewer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Main></Main>
      {/* <Switch>
        <Route path="/" exact>
          <SelectViewer></SelectViewer>
        </Route>
        <Route path="/main">
          <Main></Main>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
