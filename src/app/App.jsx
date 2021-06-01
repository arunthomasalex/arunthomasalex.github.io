import React, { Component, useEffect } from 'react';
import { Route, MemoryRouter as Router, Switch, useLocation } from 'react-router';

import NavBar from './NavBar.jsx';
import Header from './Header.jsx';
import Home from '../home';
import About from '../about';
import Work from '../work';
import Contact from '../contact';
import './style.scss';
import './header.scss';
import './navbar.scss';
import './color_1.scss';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.menu = React.createRef();
    }


    render() {
        return (
            <Router>
                <Header refValue={this.menu}/>
                <ScrollToTop/>
                <NavBar refValue={this.menu}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/* <Route exact path='/about' component={About} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/skills' component={Skills} />
                    <Route exact path='/contact' component={Contact} /> */}
                </Switch>
            </Router>
        );
    }
}