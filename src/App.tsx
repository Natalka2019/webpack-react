import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux"; // BrowserRouter
import { SearchPage } from "pages";
import { ErrorBoundary } from "components";
import Routes from "./routes";
import appStore from "./store";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

const MoviePage = React.lazy(() => import("pages/MoviePage"));

if (typeof window !== "undefined") {
  injectStyle();
}

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
          <ToastContainer />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
