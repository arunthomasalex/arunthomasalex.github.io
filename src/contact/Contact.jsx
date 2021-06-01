import React, { Component } from 'react';
import './contact.scss';

function Contacts(props) {
    return (
        <div className="row">
            {props.contacts.map(contact => {
                const classes = `fas ${contact.class} icon`;
                return(<div className="contact-item">
                    <div className="contact-item-inner outer-shadow">
                        <i className={classes}></i>
                        <span>{contact.name}</span>
                        <p>{contact.data}</p>
                    </div>
                </div>
                );
            })}
        </div>
    );
}

export default class Contact extends Component {
    render() {
        let { portfolio } = this.props;
        return (
            <section className="contact-section section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="contact">Get In Touch</h2>
                        </div>
                    </div>
                    {portfolio && <Contacts contacts={portfolio["contacts"]} />}
                </div>
            </section>
        );
    }
}