import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header className="navbar">
            <section className="navbar-section">
                {/* Used for spacing only */}
            </section>
            <section className="navbar-section">
                <div className="input-group input-inline">
                    <Link to="/about" className="btn btn-link">About Me</Link>
                    <Link to="portfolio" className="btn btn-link">Portfolio</Link>
                    <Link to="contact" className="btn btn-link">Contact</Link>
                    <Link to="resume" className="btn btn-link">Resume</Link>
                </div>
            </section>
        </header>
    )
}

export default Navbar;
