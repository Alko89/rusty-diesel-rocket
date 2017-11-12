import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import CoinhiveUser from "./pages/CoinhiveUser";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" name="about" component={About}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
            <Route path="user" name="user" component={CoinhiveUser}></Route>
        </Route>
    </Router>,
    app
);
