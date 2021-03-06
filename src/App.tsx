import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "components";
import Routes from "./routes";
import appStore from "./store";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import { SearchPage, MoviesPage, MoviePage, NotFoundPage, AnimationPage } from "pages";

// WITH LAZY LOADING TESTS DOES NOT WORK
// const SearchPage = lazy(() => import("pages/SearchPage"));
// const MoviePage = lazy(() => import("pages/MoviePage"));
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
// const MoviesPage = lazy(() => import("pages/MoviesPage"));

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
              <Route exact path={Routes.ROOT} component={AnimationPage} />
              <Route exact path={Routes.SEARCH} component={SearchPage} />
              <Route path={`${Routes.MOVIE}/:id`} component={MoviePage} />
              <Route exact path={Routes.MOVIES} component={MoviesPage} />
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
