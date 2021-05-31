import React, { Component } from 'react';
import './commonsprite.png';
import './socialmedia.png';
import './about.scss';

function SocialSiteLinks(props) {
    return (
        <div className="social-links">
            {props.links?.map(link => {
                return <a href={link.url} target="_blank" key={link.name} className="social-outer-shadow social-hover-in-shadow"><i className={"fab " + link.name}></i></a>
            })}
        </div>
    )
}

function Skills(props) {
    let classes = props.active ? "skills tab-content active" : "skills tab-content"
    return (
        <div className="row">
            <div className={classes}>
                <div className="skills-tab">
                    <div className="row">
                        {props.skills?.map(skill => {
                            let percentCalc = "calc(" + skill.percentage + "% - 14px)";
                            return (
                                <div key={skill.name} className="skill-item">
                                    <p>{skill.name}</p>
                                    <div className="progress inner-shadow">
                                        <div className="progress-bar" style={{ "width": percentCalc }}>
                                            <span>{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Experience(props) {
    let classes = props.active ? "experience tab-content active" : "experience tab-content"
    return (
        <div className="row">
            <div className={classes}>
                <div className="row">
                    <div className="timeline">
                        <div className="row">
                            {props.experiences?.map(experience => {
                                return (
                                    <div key={experience.company} className="timeline-item">
                                        <div className="timeline-item-inner outer-shadow">
                                            <i className="fas briefcase icon"></i>
                                            <span>{experience.duration}</span>
                                            <h3>{experience.post}</h3>
                                            <h4>{experience.company}</h4>
                                            <p>{experience.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Education(props) {
    let classes = props.active ? "education tab-content active" : "education tab-content"
    return (
        <div className="row">
            <div className={classes}>
                <div className="row">
                    <div className="timeline">
                        <div className="row">
                            {props.educations.map(education => {
                                return (
                                    <div key={education.course} className="timeline-item">
                                        <div className="timeline-item-inner outer-shadow">
                                            <i className="fas certificate icon"></i>
                                            <span>{education.duration}</span>
                                            <h3>{education.course}</h3>
                                            <h4>{education.institution}</h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: true,
            experience: false,
            education: false
        };
        this._createDatas.bind(this);
        this._prepareString.bind(this);
    }
    changeTab(e) {
        console.log(e.target.getAttribute("data-target"));
        this.setState((state) => {
            state = Object.assign(...Object.keys(state).map(k => ({ [k]: false })));
            state[e.target.getAttribute("data-target")] = true;
            console.log(state);
            return state;
        })
    }
    _createDatas(portfolio) {
        let experience = portfolio['experiences'].map(data => data.duration).map(date => {
            let dates = date.split('-');
            if (dates.length > 1) {
                return (Date.parse(dates[1]) - Date.parse(dates[0])) / 1000 / 60 / 60 / 24;
            }
            return (Date.now() - Date.parse(dates[0])) / 1000 / 60 / 60 / 24;
        }).reduce((p, c) => p + c, 0);
        experience /= 365;
        console.log({ experience });
        return { experience: experience.toFixed(1) };
    }
    _prepareString(sentence, datas) {
        let placeholders = sentence.match(/\{(.*?)\}/g);
        placeholders?.forEach(placeholder => {
            let text = placeholder.substring(1, placeholder.length - 1);
            if (datas[text]) {
                sentence = sentence.replace(placeholder, datas[text]);
            }
        })
        console.log(sentence);
        return sentence;
    }
    render() {
        let { portfolio } = this.props;
        let { skills, experience, education } = this.state;
        let [skillStyle, experienceStyle, educationStyle] = [skills, experience, education].map(value => value ? "tab-item outer-shadow active" : "tab-item");
        let datas = portfolio && this._createDatas(portfolio);
        let about = portfolio && this._prepareString(portfolio["about"], datas);
        return (
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
                            {portfolio && <SocialSiteLinks links={portfolio["socialSites"]} />}
                        </div>
                        <div className="about-info">
                            {portfolio && <div dangerouslySetInnerHTML={{ __html: about }} />}
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow" onClick={() => alert("Not completed, working on this feature.")}>Download CV</a>
                            <a href="#" className="btn-1 outer-shadow hover-in-shadow" onClick={() => alert("Not completed, working on this feature")}>Hire Me</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-tabs">
                            <span className={skillStyle} data-target="skills" onClick={this.changeTab.bind(this)}>skills</span>
                            <span className={experienceStyle} data-target="experience" onClick={this.changeTab.bind(this)}>experience</span>
                            <span className={educationStyle} data-target="education" onClick={this.changeTab.bind(this)}>education</span>
                        </div>
                    </div>
                    {skills && portfolio && <Skills skills={portfolio["skills"]} active={skills} />}
                    {experience && portfolio && <Experience experiences={portfolio["experiences"]} active={experience} />}
                    {education && portfolio && <Education educations={portfolio["educations"]} active={education} />}
                </div>
            </section>
        );
    }
}