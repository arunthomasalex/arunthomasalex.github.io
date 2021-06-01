import React, { Component } from 'react';
import './contact.scss';

export default class Contact extends Component {
    render() {
        return(
            <section className="contact-section section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="contact">Get In Touch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-item">
                            <div className="contact-item-inner">
                                <i className="fas phone icon"></i>
                                <span>Phone</span>
                                <p>+91-9447761834</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
    }
}