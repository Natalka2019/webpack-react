import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"; // BrowserRouter
import { SearchPage } from "pages";
import { ErrorBoundary } from "components";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
