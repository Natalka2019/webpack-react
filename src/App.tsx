import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"; // BrowserRouter
import { SearchPage } from "pages";

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
