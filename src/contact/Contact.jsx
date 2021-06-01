import React, { Component } from 'react';
import './contact.scss';

function Contacts(props) {
    return (
        <div className="row">
            {props.contacts.map(contact => {
                const classes = `fas ${contact.class} icon`;
                return (
                    <div key={contact.name} className="contact-item">
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
function ContactForm(props) {
    const onSubmit = (event) => {
        event.preventDefault();
        alert("Not completed, working on this feature.");
    };
    return (
        <div className="row">
            <div className="contact-form">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="w-50">
                            <div className="input-group outer-shadow">
                                <input type="text" placeholder="Name" name="name" id="name" className="input-control" />
                            </div>
                            <div className="input-group outer-shadow">
                                <input type="text" placeholder="Email" name="email" id="email" className="input-control" />
                            </div>
                            <div className="input-group outer-shadow">
                                <input type="text" placeholder="Subject" name="subject" id="subject" className="input-control" />
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="input-group outer-shadow">
                                <textarea name="message" id="message" className="input-control" placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="submit-btn">
                            <button type="submit" className="btn-1 outer-shadow">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default class Contact extends Component {
    render() {
        let { portfolio } = this.props;
        return (
            <section className="contact-section section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="contact">Get In Touch</h2>
                        </div>
                    </div>
                    {portfolio && <Contacts contacts={portfolio["contacts"]} />}
                    <ContactForm />
                </div>
            </section>
        );
    }
}