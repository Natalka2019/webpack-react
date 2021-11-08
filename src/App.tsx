import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "components";
import Routes from "./routes";
import appStore from "./store";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

const SearchPage = lazy(() => import("pages/SearchPage"));
const MoviePage = lazy(() => import("pages/MoviePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const MoviesPage = lazy(() => import("pages/MoviesPage"));

if (typeof window !== "undefined") {
  injectStyle();
}

const App = () => {
  return (
    <Provider store={appStore}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading ...</div>}>
          <Router>
            <Switch>
              <Route exact path={Routes.ROOT}>
                <MoviesPage />
              </Route>
              <Route exact path={Routes.SEARCH}>
                <SearchPage />
              </Route>
              <Route path={`${Routes.MOVIE}/:id`}>
                <MoviePage />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
            <ToastContainer />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
