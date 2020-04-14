import React, { useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {

    useEffect(() => {
        axios.get('http://www.github.com/abqkatrina')
        .then(res => setData(res))
        .catch(err => res.send(500).json({ message: "Error fetching data"}))
    })
    return(
        // <!-- Portfolio -->
        <section id="portfolio" class="portfolio">
            <div class="container">
                <header>
                    <h2>Here’s some stuff I made recently.</h2>
                    <p>Most of these items are practice project and assignments from Lambda School. I'll keep updating the list as I make new things.</p>
                </header>
                <div class="folder" id="portfoliofolder">
                    {data.map(project => {
                        <article class="file">
                            <a href="https://abqkatrina.github.io/great-idea-index.html" class="image"><img src="img/pic01.jpg" alt="" /></a>
                            <h3><a href="https://abqkatrina.github.io/great-idea-index.html">Great-Idea!</a></h3>
                        </article>
                    })}
                </div>
            </div>
        </section>
    )
}
export default Portfolio;