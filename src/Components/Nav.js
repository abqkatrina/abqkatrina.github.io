import React from 'react';

const Nav = () => {

    return(
        <nav>
            <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Nav;