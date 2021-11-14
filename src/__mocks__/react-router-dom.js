import React from "react";
const rrd = require("react-router-dom");
// Just render plain div with its children
const element = ({ children }) => <div>{children}</div>;
rrd.BrowserRouter = element;
module.exports = rrd;
