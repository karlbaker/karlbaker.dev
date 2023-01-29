import React from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './HeaderBar.css';
import '../fontawesome/css/all.min.css'

function HeaderBar() {
    return (
        <div className="top">
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar header">
                <nav className="container d-flex flex-column flex-md-row justify-content-between">
                        <a href="https://www.karlbaker.dev" className="logo">KarlBaker.dev</a>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul className="menu">
                            <li><a href="https://www.karlbaker.dev">Interactive Resume</a></li>
                            <li><a href="https://www.karlbaker.dev">Projects</a></li>
                            <li><a href="https://www.karlbaker.dev">Blog</a></li>
                            <li><a href="https://github.com/karlbaker" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-xl" /></a></li>
                            <li><a href="https://www.linkedin.com/in/karlbaker-85/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-xl" /></a></li>
                            <li><a href="https://www.youtube.com/c/LetsAutomateIt" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-xl" /></a></li>  
                        </ul>
                </nav>
            </header>
        </div>
    );
}

export default HeaderBar;