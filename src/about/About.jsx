import React, { Component } from 'react';
import arun from '../home/ArunThomasAlex.jpg';
import './socialmedia.png';
import './about.scss';

export default class About extends Component {
    render() {
        return(
            <section className="about-section section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="main info">
                                About Me
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-img">
                            <div className="img-box inner-shadow">
                                <img src={arun} alt="profile-pic" className="outer-shadow" />
                            </div>
                            <div className="social-links">
                                <a href="#" className="social-link outer-shadow hover-in-shadow"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-link outer-shadow hover-in-shadow"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-link outer-shadow hover-in-shadow"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="about-info">
                            <p><span>Hi! My name is Arun Thomas Alex. I am a full stack developer.</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                            <p> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow">Download CV</a>
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}