import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="logo">
                            <a href="/">A</a>
                        </div>
                        <div className="hamburger-btn outer-shadow hover-in-shadow">
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}