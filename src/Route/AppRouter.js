import Answers from "Pages/Answers/";
import NoMatch from "Pages/Error/NoMatch";
import Questions from "Pages/Questions/";
import SignIn from "Pages/SignIn/SignIn";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const AppRouter = () => {
  const { PrivateRoute } = ProtectedRoute();

  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>

      <PrivateRoute admin exact path="/questions">
        <Questions />
      </PrivateRoute>

      <PrivateRoute exact path="/answers">
        <Answers />
      </PrivateRoute>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default AppRouter;
