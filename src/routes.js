"use strict";
/*
 This is the "sitemap" of the app!
 */

import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from './components/App';
import Home from './components/pages/home';
import About from './components/pages/about';
import Dashboard from './components/pages/dashboard';
import Login from './components/pages/login';
import SignUp from './components/pages/signUp';
import NotFound from './components/pages/not_found';
import {requireAuthentication} from './components/authenticatedComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="dashboard" component={requireAuthentication(Dashboard)}/>
        <Route path="signUp" component={SignUp}/>
        <Route path="login" component={Login}/>
        <Route path="*" component={NotFound}/>
    </Route>
);
