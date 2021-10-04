import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"; // BrowserRouter
import { SearchPage, MoviePage } from "pages";
import { ErrorBoundary } from "components";
import Routes from "./routes";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path={Routes.ROOT}>
            <SearchPage />
          </Route>
          <Route path={`${Routes.MOVIE}/:id`}>
            <MoviePage />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
