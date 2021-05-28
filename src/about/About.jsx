import React, { Component } from 'react';
import { portfolioService } from '../_services';
import arun from '../home/ArunThomasAlex.jpg';
import './socialmedia.png';
import './about.scss';

function SocialSiteLinks(props) {
    return (
        <div className="social-links">
            {props.links.map(link => {
                return <a href={link.url} target="_blank" key={link.name} className="social-outer-shadow social-hover-in-shadow"><i className={"fab " + link.name}></i></a>
            })}
        </div>
    )
}

function Skills(props) {
    return (
        <div className="skills-tab">
            <div className="skills tab-content">
                <div className="row">
                    {props.skills.map(skill => {
                        let percentCalc = "calc("+skill.percentage+"% - 14px)";
                        return (
                            <div key={skill.name} className="skill-item">
                                <p>{skill.name}</p>
                                <div className="progress inner-shadow">
                                    <div className="progress-bar" style={{ "width": percentCalc}}>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}


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
                            <SocialSiteLinks links={portfolioService.getPortfolio()["socialSites"]}/>
                        </div>
                        <div className="about-info">
                            <div dangerouslySetInnerHTML={{__html: portfolioService.getPortfolio()["about"]}} />
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow">Download CV</a>
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow">Hire Me</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-tabs">
                            <span className="tab-item outer-shadow active" data-taget=".skills">skills</span>
                            <span className="tab-item" data-taget=".experience">experience</span>
                            <span className="tab-item" data-taget=".education">education</span>
                        </div>
                        <Skills skills={portfolioService.getPortfolio()["skills"]}/>
                    </div>
                </div>
            </section>
        );
    }
}