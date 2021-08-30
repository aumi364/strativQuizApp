import Answers from "Pages/Answers/Answers";
import NoMatch from "Pages/Error/NoMatch";
import SignIn from "Pages/SignIn/SignIn";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/answers">
          <Answers />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
