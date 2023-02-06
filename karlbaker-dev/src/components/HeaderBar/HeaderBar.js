import React from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './HeaderBar.css';
import '../fontawesome/css/all.min.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../../hooks/useUser';

function HeaderBar() {
    const { user } = useUser();
    const navigate = useNavigate();
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
                            <li><a href="https://github.com/karlbaker" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-xl" /></a></li>
                            <li><a href="https://www.linkedin.com/in/karlbaker-85/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-xl" /></a></li>
                            <li><a href="https://www.youtube.com/c/LetsAutomateIt" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-xl" /></a></li>  
                        </ul>
                        <div className='nav-right'>
                            { user 
                                ? <button
                                    onClick={() => {
                                        signOut(getAuth())
                                    }}>Log Out</button>
                                : <button
                                    onClick={() => {
                                        navigate('/login')
                                    }}>Log In</button> }
                        </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderBar;