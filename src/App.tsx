import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"; // BrowserRouter
import { MainPage, TorontoPage, ThirdPage } from "pages";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
            <li>
              <Link to="/toronto">TorontoPage</Link>
            </li>
            <li>
              <Link to="/3">ThirdPage</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <MainPage name = "World"/>
          </Route>
          <Route path="/toronto">
            <TorontoPage />
          </Route>
          <Route path="/3">
            <ThirdPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;