import React, { Component } from 'react';
import arun from './ArunThomasAlex.jpg';
import './home.scss';

export default class Home extends Component {
    render() {
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
                            <h2>I'm Arun Thomas Alex</h2>
                            <h1>Full stack Developer</h1>
                            {/* <Link className="btn-1 outer-shadow hover-in-shadow" to='/about'>More About Me</Link> */}
                            <a href="#about" className="btn-1 outer-shadow hover-in-shadow">More About Me</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box inner-shadow">
                                <img src={arun} alt="profile-pic" className="outer-shadow" />
                            </div>
                        </div>
                    </div>
                </div>F
            </section>
        );
    }
}