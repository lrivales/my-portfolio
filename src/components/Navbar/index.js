import React from "react";

function Navbar() {

    return (
        <header className="navbar">
            <section className="navbar-section">
                {/* Used for spacing only */}
            </section>
            <section className="navbar-section">
                <div className="input-group input-inline">
                    <a href="#about" className="btn btn-link">About Me</a>
                    <a href="#portfolio" className="btn btn-link">Portfolio</a>
                    <a href="#contact" className="btn btn-link">Contact</a>
                    <a href="#resume" className="btn btn-link">Resume</a>
                </div>
            </section>
        </header>
    )
}

export default Navbar;