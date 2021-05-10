import React, { Component } from "react";
import { Link, MemoryRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from '../home';
import Work from '../work';
import About from '../about';
import Skills from '../skills';
import Contact from '../contact';

export default class App extends Component {
    render() {
        return(
            <Router>
                <ul>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/skills" component={Skills}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </Router>
        );
    }
}