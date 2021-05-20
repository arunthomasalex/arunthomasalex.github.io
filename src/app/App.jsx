import React, { Component } from 'react';

import NavBar from './NavBar.jsx';
import Header from './Header.jsx';

import './style.scss';
import './header.scss';
import './navbar.scss';
import './color_1.scss';

export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <NavBar/>
            </>
        );
    }
}