import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'; // BrowserRouter
import { MainPage, TorontoPage, ThirdPage, SearchPage } from 'pages';
import { Provider } from 'react-redux';

const App = (props: any) => {
  return (
    <Provider store={props.store}>
      <Router>
        <>
          {/* <nav>
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
              <li>
                <Link to="/searchpage">SearchPage</Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route exact path="/main">
              <MainPage name="World" />
            </Route>
            <Route path="/toronto">
              <TorontoPage />
            </Route>
            <Route path="/3">
              <ThirdPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
