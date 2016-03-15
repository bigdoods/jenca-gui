import React from 'react'

export default function Bar() {
  return (
  	<div>
  	This is the login form!
		
		<div class="login">
			<i ripple>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path fill="#C7C7C7" d="m12,2c-5.52,0-10,4.48-10,10s4.48,10,10,10,10-4.48,10-10-4.48-10-10-10zm1,17h-2v-2h2zm2.07-7.75-0.9,0.92c-0.411277,0.329613-0.918558,0.542566-1.20218,1.03749-0.08045,0.14038-0.189078,0.293598-0.187645,0.470854,0.02236,2.76567,0.03004-0.166108,0.07573,1.85002l-1.80787,0.04803-0.04803-1.0764c-0.02822-0.632307-0.377947-1.42259,1.17-2.83l1.24-1.26c0.37-0.36,0.59-0.86,0.59-1.41,0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4c0,0.88-0.36,1.68-0.930005,2.25z"/>
				</svg>
			</i>
			<div class="photo"></div>
			<span>Sign in with your Google Account</span>
			<form action="" id="login-form">
				<div id="u" class="form-group">
		  			<input id="username" spellcheck=false class="form-control" name="username" type="text" size="18" alt="login" required="">
		  			<span class="form-highlight"></span>
		  			<span class="form-bar"></span>
		  			<label for="username" class="float-label">Email</label>
			  		<erroru>
				  		Username is required
				  		<i>		
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						    	<path d="M0 0h24v24h-24z" fill="none"/>
						    	<path d="M1 21h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
							</svg>
				  		</i>
			  		</erroru>
				</div>
				<div id="p" class="form-group">
			  		<input id="password" class="form-control" spellcheck=false name="password" type="password" size="18" alt="login" required="">
			  		<span class="form-highlight"></span>
			  		<span class="form-bar"></span>
			  		<label for="password" class="float-label">Password</label>
			  		<errorp>
			  			Password is required
					  	<i>		
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							    <path d="M0 0h24v24h-24z" fill="none"/>
							    <path d="M1 21h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
							</svg>
					  	</i>
			  		</errorp>
				</div>
				<div class="form-group">
					<input type="checkbox" id="rem">
					<label for="rem">Stay Signed in</label>
					<button id="submit" type="submit" ripple>Sign in</button>
				</div>
			</form>
			
			<footer><a href="#0">Create an account</a></footer>
		</div>

  	</div>
  )
}

