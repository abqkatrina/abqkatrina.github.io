import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Skills from './Skills';
import Contacts from './Contacts';
import Portfolio from './Portfolio';







export default function Main() {

    return(
        <div class="main">
        <Router>
            <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/skills'component={Skills} />
            <Route path='/contacts'component={Contacts} />
            <Route path='/portfolio'component={Portfolio} />
            </Switch>
        </Router>
        </div>
    )
}