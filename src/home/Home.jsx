import React, { Component } from 'react';
import arun from './ArunThomasAlex.jpg';
import { portfolioService } from '../_services';
import './home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: {}
        };
        portfolioService.getPortfolio()
            .then(response => response.json())
            .then(data => this.setState({portfolio: data}));
    }
    render() {
        let { portfolio } = this.state;
        return (
            <section className="home-section section" id="home">
                <div className="effect-wrap">
                    <div className="effect effect-1"></div>
                    <div className="effect effect-2">
                        <div></div><div></div><div></div><div></div><div></div><div>
                        </div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div>
                        </div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div>
                        </div>
                    </div>
                    <div className="effect effect-3"></div>
                    <div className="effect effect-4"></div>
                    <div className="effect effect-5">
                        <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row full-screen align-item-center">
                        <div className="home-text">
                            <p>Hello</p>
                            <h2>I'm {portfolio["name"]}</h2>
                            <h1>Full stack Developer</h1>
                            {/* <Link className="btn-1 outer-shadow hover-in-shadow" to='/about'>More About Me</Link> */}
                            <a href="#about" className="btn-1 outer-shadow hover-in-shadow">More About Me</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box inner-shadow">
                                {portfolio && <img src={portfolio["image"]} alt="profile-pic" className="outer-shadow" />}
                            </div>
                        </div>
                    </div>
                </div>F
            </section>
        );
    }
}