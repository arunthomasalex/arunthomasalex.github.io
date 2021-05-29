import React, { Component } from 'react';
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
        let { portfolio } = this.props;
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
                                {portfolio && <img src={portfolio["image"]} alt="profile-pic" className="outer-shadow" />}
                            </div>
                            {portfolio && <SocialSiteLinks links={portfolio["socialSites"]}/>}
                        </div>
                        <div className="about-info">
                            {portfolio && <div dangerouslySetInnerHTML={{__html: portfolio["about"]}} />}
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
                        {portfolio && <Skills skills={portfolio["skills"]}/>}
                    </div>
                    <div className="row">
                        <div className="experience tab-content">
                            <div className="row">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner">
                                                <i className="fas fa-briefcase icon"></i>
                                                <span>Sep, 2018</span>
                                                <h3>full stack developer</h3>
                                                <h4>Company name, india</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner">
                                                <i className="fas fa-briefcase icon"></i>
                                                <span>Sep, 2017</span>
                                                <h3>full stack developer</h3>
                                                <h4>Company name, india</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner">
                                                <i className="fas fa-briefcase icon"></i>
                                                <span>Sep, 2016</span>
                                                <h3>full stack developer</h3>
                                                <h4>Company name, india</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}