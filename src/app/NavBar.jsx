import React, { Component } from 'react';
import { Link, MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home';
import Work from '../work';
import About from '../about';
import Skills from '../skills';
import Contact from '../contact';

export default class NavBar extends Component {
    render() {
        return(
            <Router>
                <nav className="nav-menu">
                    <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
                    <div className="nav-menu-inner">
                    <ul>
                        <li><Link className="inner-shadow active" to="/">Welcome</Link></li>
                        <li><Link className="outer-shadow hover-in-shadow" to='/about'>About</Link></li>
                        <li><Link className="outer-shadow hover-in-shadow" to='/work'>Work</Link></li>
                        <li><Link className="outer-shadow hover-in-shadow" to='/skills'>Skills</Link></li>
                        <li><Link className="outer-shadow hover-in-shadow" to='/contact'>Contact</Link></li>
                    </ul>
                    </div>
                    <p className="copyright-text">&copy; 2020 The Webshala</p>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/skills' component={Skills} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Router>
        )
    }
}