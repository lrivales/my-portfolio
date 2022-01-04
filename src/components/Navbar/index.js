import React from "react";

function Navbar() {
    return (
        <header class="navbar">
            <section class="navbar-section">
                {/* <a href="..." class="navbar-brand mr-2">Spectre.css</a>
                <a href="..." class="btn btn-link">Docs</a>
                <a href="..." class="btn btn-link">GitHub</a> */}
            </section>
            <section class="navbar-section">
                <div class="input-group input-inline">
                    {/* <input class="form-input" type="text" placeholder="search" />
                    <button class="btn btn-primary input-group-btn">Search</button> */}
                    <a href="..." class="btn btn-link">About Me</a>
                    <a href="..." class="btn btn-link">Portfolio</a>
                    <a href="..." class="btn btn-link">Contact</a>
                    <a href="..." class="btn btn-link">Resume</a>
                </div>
            </section>
        </header>
    )
}

export default Navbar;