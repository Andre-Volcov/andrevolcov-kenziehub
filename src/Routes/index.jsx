import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route path={"/home/:id/:course_module"}>
        <Home />
      </Route>
      <Route exact path={"/"}>
        <Login />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
    </Switch>
  );
}
