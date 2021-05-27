import React, { Component } from 'react';
import { Link, MemoryRouter as Router, Route, Switch } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
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
        )
    }
}