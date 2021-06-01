import React, { Component } from 'react';

export default class NavBar extends Component {
    disableMenu() {
        this.props.refValue.current.style.zIndex =  -1;
        this.props.refValue.current.style.visibility = 'hidden' ;
    }
    render() {
        const disableMenu = this.disableMenu.bind(this);
        return (
            <nav className="nav-menu" ref={this.props.refValue}>
                <div onClick={disableMenu} className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
                <div className="nav-menu-inner">
                    <ul>
                        <li><a className="inner-shadow active" href="/">Welcome</a></li>
                        <li><a className="outer-shadow hover-in-shadow" href="/#about" onClick={disableMenu}>About</a></li>
                        <li><a className="outer-shadow hover-in-shadow" href="/#about" onClick={disableMenu}>Skills</a></li>
                        <li><a className="outer-shadow hover-in-shadow" href="/#about" onClick={disableMenu}>Work</a></li>
                        <li><a className="outer-shadow hover-in-shadow" href="/#contact" onClick={disableMenu}>Contact</a></li>
                    </ul>
                </div>
                <p className="copyright-text">&copy; 2020 The Webshala</p>
            </nav>
        )
    }
}