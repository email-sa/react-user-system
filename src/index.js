import React, { Component } from "react";
import ReactDOM from "react-dom";
import Route from "./router";

// import App from "./App";
import "antd/dist/antd.css";
import "./style/index.scss";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const render = (Component) => {
    ReactDOM.render(
        // <React.StrictMode>
        <Component />,
        // </React.StrictMode>,
        document.getElementById("root")
    );
};
render(Route);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
