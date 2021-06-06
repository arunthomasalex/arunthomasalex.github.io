import React, { Component } from 'react';
import './style.scss';
import { portfolioService } from '../_services';
import { createDatas, prepareString } from '../_utils';

function Experience(props) {
    return (
        <div className="resume_item resume_work">
            <div className="title">
                <p className="bold">Work Experience</p>
            </div>
            <ul>
                {props.experiences.map(experience => {
                    return (
                        <li>
                            <div className="date">{experience.duration}</div>
                            <div className="info">
                                <p className="semi-bold">{experience.company}</p>
                                <p>{experience.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

function Education(props) {
    return (
        <div className="resume_item resume_education">
            <div className="title">
                <p className="bold">Education</p>
            </div>
            <ul>
                {props.educations.map(education => {
                    return (
                        <li>
                            <div className="date">{education.duration}</div>
                            <div className="info">
                                <p className="semi-bold">{education.course}</p>
                                <p>{education.institution}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: null
        };
        portfolioService.getPortfolio()
            .then(response => response.json())
            .then(data => this.setState({ portfolio: data }));
    }
    render() {
        const { portfolio } = this.state;
        if (!portfolio) return (<></>);
        let datas = portfolio && createDatas(portfolio);
        let about = portfolio && prepareString(portfolio["about"], datas);
        return (
            <div className="resume">
                <div className="resume_left">
                    <div className="resume_profile">
                        <img src={portfolio.image} alt="profile_pic" />
                    </div>
                    <div className="resume_content">
                        <div className="resume_item resume_info">
                            <div className="title">
                                <p className="bold">{portfolio.name}</p>
                                <p className="regular">{portfolio.designation}</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="data">
                                        Vadakkemappilaveedu, <br /> Keshavapuram, <br />Kerala-69018
                                    </div>
                                </li>
                                <li>
                                    <div className="data">
                                        +91-944761834
                                    </div>
                                </li>
                                <li>
                                    <div className="data">
                                        arunthomasalex@yahoo.co.in
                                    </div>
                                </li>
                                <li>
                                    <div className="data">
                                        https://arunthomasalex.github.io
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_skills">
                            <div className="title">
                                <p className="bold">skill's</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="skill_name">
                                        HTML
                                        </div>
                                    <div className="skill_progress">
                                        <span style={{ width: "60%" }}></span>
                                    </div>
                                    <div className="skill_per">60%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        Javascript
                                        </div>
                                    <div className="skill_progress">
                                        <span style={{ width: "80%" }}></span>
                                    </div>
                                    <div className="skill_per">80%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        Java/Groovy
                                        </div>
                                    <div className="skill_progress">
                                        <span style={{ width: "85%" }}></span>
                                    </div>
                                    <div className="skill_per">85%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        Nodejs/Python
                                        </div>
                                    <div className="skill_progress">
                                        <span style={{ width: "75%" }}></span>
                                    </div>
                                    <div className="skill_per">75%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        Python
                                        </div>
                                    <div className="skill_progress">
                                        <span style={{ width: "75%" }}></span>
                                    </div>
                                    <div className="skill_per">75%</div>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="resume_item resume_social">
                            <div className="title">
                                <p className="bold">Social</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Facebook</p>
                                        <p>Stephen@facebook</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-twitter-square"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Twitter</p>
                                        <p>Stephen@twitter</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Youtube</p>
                                        <p>Stephen@youtube</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Linkedin</p>
                                        <p>Stephen@linkedin</p>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="resume_right">
                    <div className="resume_item resume_about">
                        <div className="title">
                            <p className="bold">About us</p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: about }}></div>
                    </div>
                    <Experience experiences={portfolio['experiences']} />
                    <Education educations={portfolio['educations']} />
                    <div className="resume_item resume_hobby">
                        <div className="title">
                            <p className="bold">Hobby</p>
                        </div>
                        <ul>
                            <li><i className="fas fa-book"></i></li>
                            <li><i className="fas fa-gamepad"></i></li>
                            <li><i className="fas fa-music"></i></li>
                            <li><i className="fab fa-pagelines"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}