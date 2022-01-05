import React from "react";

function Contact() {
    return(
        <div className="column custom-padding" id="contact">
            <div className="column">
                <h2 className="text-right text-custom-primary">send me a message</h2>
            </div>
            <div className="form-group column">
                <label className="form-label" htmlFor="name">name</label>
                <input className="form-input" type="text" id="name" placeholder="name" />
                <label className="form-label" htmlFor="email">email</label>
                <input className="form-input" type="text" id="email" placeholder="email" />
                <label className="form-label" htmlFor="message">message</label>
                <textarea className="form-input" id="message" placeholder="message" rows="3"></textarea>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Contact;
