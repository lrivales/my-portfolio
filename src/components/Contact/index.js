import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <div className="column custom-padding" id="contact">
            <div className="column">
                <h2 className="text-right text-custom-primary">send me a message</h2>
            </div>
            <div className="form-group column">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="name">name</label>
                    <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    <label className="form-label" htmlFor="email">email</label>
                    <input className="form-input" type="text" name="email" defaultValue={email} onBlur={handleChange}/>
                    <label className="form-label" htmlFor="message">message</label>
                    <textarea className="form-input" name="message" defaultValue={message} onBlur={handleChange} rows="3"></textarea>
                    <br />
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    {!errorMessage && (
                        <button type="submit" className="btn btn-primary">Send</button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Contact;
