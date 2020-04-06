import React from 'react';

const Portfolio = () => {

    return(
        // <!-- Portfolio -->
        <article id="portfolio" class="portfolio">
            <div class="container">
                <header>
                    <h2>Here’s some stuff I made recently.</h2>
                    <p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
                </header>
                <div class="folder" id="portfoliofolder">
                        <article class="file">
                            <a href="https://abqkatrina.github.io/great-idea-index.html" class="image"><img src="img/pic01.jpg" alt="" /></a>
                            <h3><a href="https://abqkatrina.github.io/great-idea-index.html">Great-Idea!</a></h3>
                            <p>This was a practice project for learning design, layouts, box and flex positioning.</p>
                        </article>

                        <article class="file">
                            <a href="https://abqkatrina.github.io/sprint-index.html" class="image"><img src="img/pic02.jpg" alt="" /></a>
                            <h3><a href="https://abqkatrina.github.io/sprint-index.html">Sprint Challenge</a></h3>
                            <p>This was a practice project for learning box and flex positioning.</p>
                        </article>

                        <article class="file">
                            <a href="#" class="image"><img src="img/pic03.jpg" alt="" /></a>
                            <h3><a href="#">Tieme Ndo - Baabo</a></h3>
                            <p>For this project, I was Web/UI developer/designer and created the project from scratch, working with frontend and backend developers.</p>
                        </article>
                
                
                        <article class="file">
                            <a href="#" class="image"><img src="img/pic04.jpg" alt="" /></a>
                            <h3><a href="#">Dissecting Horror</a></h3>
                            <p>This is a professional project for a podcast. I created the site from scratch.</p>
                        </article>
                
                        <article class="file">
                            <a href="#" class="image"><img src="img/pic05.jpg" alt="" /></a>
                            <h3><a href="#">Coming Soon</a></h3>
                            <p>Ornare nulla proin odio consequat.</p>
                        </article>


                        <article class="file">
                            <a href="#" class="image"><img src="img/pic06.jpg" alt="" /></a>
                            <h3><a href="#">Coming Soon</a></h3>
                            <p>Ornare nulla proin odio consequat.</p>
                        </article>

                </div>
            </div>
        </article>
    )
}
export default Portfolio;