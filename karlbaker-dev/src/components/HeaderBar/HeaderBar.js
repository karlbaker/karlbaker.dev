import React from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './HeaderBar.css';
import { SiLeetcode, SiLinkedin, SiYoutube, SiGithub, SiStackoverflow } from 'react-icons/si';
import { Link } from 'react-router-dom';

function HeaderBar() {

    return (
        <div className="top">
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar header">
                <nav className="container d-flex flex-column flex-md-row justify-content-between">
                    <Link to="/" className="logo">KarlBaker.dev</Link>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="https://github.com/karlbaker" target="_blank" rel="noreferrer"><SiGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/karlbaker-85/" target="_blank" rel="noreferrer"><SiLinkedin /></a></li>
                            <li><a href="https://www.youtube.com/c/LetsAutomateIt" target="_blank" rel="noreferrer"><SiYoutube /></a></li>
                            <li><a href="https://leetcode.com/karlbaker/" target="_blank" rel="noreferrer"><SiLeetcode /></a></li>
                            <li><a href="https://stackoverflow.com/users/2233118/karl" target="_blank" rel="noreferrer"><SiStackoverflow /></a></li>
                        </ul>
                        <div className='nav-right'>
                           
                        </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderBar;