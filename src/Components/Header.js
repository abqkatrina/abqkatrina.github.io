import React from 'react';
// import logo from '../img/isolated-monochrome-white.svg';
import '../css/App.css';

const Header = () => {

return(
    <div>
        
        {/* <!-- Home --> */}
        <article id="top" class="hero component">
            <div class="container">
                        <span class="selfie" ><img alt="selfie"/></span>
                        <header>
                            <h3>Hi. I'm </h3><h1>Katrina Hernandez</h1>
                        </header>
                        <h3>I'm a student web developer with an interest in foreign language, fine art, digital design, and animation.</h3>
                        <a href="/skills" class="button">see what I can do</a>
            </div>
        </article>

)
}
export default Header;