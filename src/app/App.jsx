import React, { Component, useEffect } from 'react';
import { Route, MemoryRouter as Router, Switch, useLocation } from 'react-router';

import NavBar from './NavBar.jsx';
import Header from './Header.jsx';
import Home from '../home';
import './style.scss';
import './header.scss';
import './navbar.scss';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function FadeEffect(props) {
    return (
        <div ref={props.fader} className="fade-out-effect"></div>
    );
}

function PreLoader() {
    return (
        <div className="preloader">
            <div className="box">
                <div></div><div></div><div></div>
            </div>
        </div>
    );
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.menu = React.createRef();
        this.fade = React.createRef();
    }
    render() {
        // document.body.classList.add("dark");
        // document.body.style.setProperty('--skin-color', 'white');
        // document.body.style.setProperty('--bg-black-50', '#504f4f');
        return (
            <React.StrictMode>
                <Router>
                    <PreLoader />
                    <Header refValue={this.menu} />
                    <ScrollToTop />
                    <NavBar refValue={this.menu} fader={this.fade} />
                    <FadeEffect fader={this.fade} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </React.StrictMode>
        );
    }
}