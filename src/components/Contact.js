import React from 'react'
import './CSS/Contact/Contact.css'

const Contact = () => {
    return (
        <div id="contact" className="contact-wrapper">
            <footer className="contact-footer">
                <span className="section-four">CONTACT</span>
                <div className="gray-line"></div>
                <h2 className="contact-heading">
                Please feel free to contact us. <br />
                We're always open to talk.
                </h2>
                <span className="contact-span">
                    Our mission is to spread the love of the written word to everyone across the country and
                    to do that we need help from people like you. For inquiries about OVRDU and our practices,
                    please call our head office or e-mail us at orvdu@fake-email.com.

                    <br />

                    For customer service please contact our customer service number.

                    <h4 className="contact-thank">As always, thank you ✌️</h4>
                </span>
            </footer>
            <div className="footer-social-links">
                <ul className="footer-social-links-ul">
                    <li><a href="https://www.github.com/pc846">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/priscilla-coronado">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
