import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);


ReactDOM.render(<App store={store}/>, document.getElementById("root"));