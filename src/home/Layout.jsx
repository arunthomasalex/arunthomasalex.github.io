import React, { Component } from "react";
import About from "../about";
import Home from "./Home.jsx";

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Home />
                <About />
            </>
        )
    }
}