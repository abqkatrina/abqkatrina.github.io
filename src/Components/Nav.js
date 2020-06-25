import React from 'react';

const Nav = () => {

    return(
        <nav id="nav" className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><img src-="../img/isolated-monochrome-white.png" className="top-logo" alt="logo" /></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Nav;
