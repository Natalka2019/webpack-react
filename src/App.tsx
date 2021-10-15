import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux"; // BrowserRouter
import { SearchPage, MoviePage } from "pages";
import { ErrorBoundary } from "components";
import Routes from "./routes";
import appStore from "./store";

const App = () => {
  return (
    <Provider store={appStore}>
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
    </Provider>
  );
};

export default App;
