import React, { Component } from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import { createBrowserHistory } from "history";

import asyncComponent from "./../utils/asyncComponent";
const history = createBrowserHistory();

const Home = asyncComponent(() => import("./../views/home/Home.jsx"));
const Overview = asyncComponent(() => import("./../views/overview/index"));
const User = asyncComponent(() => import("../views/user/User"));
const Default = asyncComponent(() => import("../views/default"));
class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                    <Home history={history}>
                        <Switch>
                            <Route path="/" exact component={Overview}></Route>
                            <Route path="/user" component={User}></Route>
                            {/* <Route path="/:id" component={Default}></Route> */}
                        </Switch>
                    </Home>
                </Router>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;
