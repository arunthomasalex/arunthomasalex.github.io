import React, { Component } from "react";
import { portfolioService } from '../_services';
import About from "../about";
import Home from "./Home.jsx";
import Contact from "../contact";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: null
        };
        portfolioService.getPortfolio()
            .then(response => response.json())
            .then(data => this.setState({portfolio: data}));
    }
    render() {
        let { portfolio } = this.state;
        return (
            <>
                <Home portfolio={portfolio} />
                <About portfolio={portfolio} />
                <Contact portfolio={portfolio} />
            </>
        )
    }
}