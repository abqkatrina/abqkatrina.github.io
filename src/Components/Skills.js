import React from 'react';

const Skills = () => {

	return(
		<article id="work" class="skills">
			<div class="container">
				<header>
					<h2>here's what I know</h2>
					<p>Odio turpis amet sed consequat eget posuere consequat.</p>
				</header>
				<div class="skill">
					<section class="box1">
						<span class="icon html"><img/></span>
						<h3>H T M L</h3>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
					</section>
					<section class="box1">
						<span class="icon css"></span>
						<h3>C S S / L e s s</h3>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
					</section>
					<section class="box1">
						<span class="icon javascript"></span>
						<h3>Javascript (dom, api)</h3>
						<p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
					</section>
				</div>
			</div>
		</article>
	)
}
export default Skills;