import React from 'react';
import logo from '../img/isolated-monochrome-white.svg';
import '../css/App.css';

return(
    <div>
        <nav>
            <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {/* <!-- Home --> */}
        <article id="top" class="hero">
            <div class="container">
                        <span class="selfie"><img/></span>
                        <header>
                            <h2>Hi. I'm </h2><h1>Katrina Hernandez</h1>
                        </header>
                        <h3>I'm a student web developer with an interest in foreign language, fine art, digital design, and animation.</h3>
                        <a href="#skills" class="button">see what I can do</a>
            </div>
        </article>
    </div>
)