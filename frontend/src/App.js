import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ImagePage from "./Components/ImagePage";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/image" component={ImagePage} />
      </Switch>
    </div>
  );
}

export default App;
