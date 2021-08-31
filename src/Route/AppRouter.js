import Answers from "Pages/Answers/Answers";
import NoMatch from "Pages/Error/NoMatch";
import Questions from "Pages/Questions/Questions";
import SignIn from "Pages/SignIn/SignIn";
import React from "react";
import { Switch, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/questions">
        <Questions />
      </Route>
      <Route exact path="/answers">
        <Answers />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default AppRouter;
