import React, { Component } from "react";
import { portfolioService } from '../_services';
import { PortfolioContext } from "../_utils";
import About from "../about";
import Home from "./Home.jsx";
import Contact from "../contact";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: null
        };
    }
    componentDidMount() {
        portfolioService.getPortfolio()
            .then(response => response.json())
            .then(data => this.setState({ portfolio: data }));
    }
    render() {
        return (
            <PortfolioContext.Provider value={this.state}>
                <Home />
                <About />
                <Contact />
            </PortfolioContext.Provider>
        )
    }
}