import React from 'react';

export default function Contacts() {



	return(
		<div class="container contact component">
			<div>
				<h2>Tell me what you think!</h2>
				<p>I'll be ready for a developer job this summer -- get me while I'm hot!</p>
			</div>
			{/* <div class="row"> */}
				{/* <form method="post" action="#">
					<div class="row">
							<input type="text" name="name" id="name" placeholder="Name" />
							<input type="text" name="email" id="email" placeholder="Email" />
							<input type="text" name="subject" id="subject" placeholder="Subject" />
							<textarea name="message" id="message" placeholder="Message"></textarea>
							<ul class="actions">
								<li><input type="submit" class="button" value="Email Me"/></li>
								<li><input type="reset" class="button" value="Clear Form" class="alt" /></li>
							</ul>
					</div>
				</form> */}
			{/* </div> */}
			<div class="social"> 
				<hr />
				<h3>Find me on ...</h3>
				<ul>
					<li><a href="http://www.github.com/abqkatrina" class="link github"><img src="../img/githublogo.png" class="icon" alt="" /></a></li>
					<li><a href="http://www.linkedin.com/in/abqkatrina" class="link linkedin-in"><img src="../img/linkedinlogo.png" class="icon" alt="" /></a></li>
					{/* <li><a href="#" class="link facebook-f"><img src="../img/facebooklogo.png" class="icon"alt="" /></a></li> */}
					{/* <li><a href="#" class="link skype"><img src="../img/skypelogo.png" class="icon" alt="" /></a></li> */}
					{/*<li><a href="#" class="link instagram"><img src="../img/instagramlogo.png" class="icon" alt="" /></a></li> */}
					<li><a href="mailto: abqkatrina@gmail.com">EMAIL</a></li>
				</ul>
				<hr />
			</div>
		</div>
	)
}

