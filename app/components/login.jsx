import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';

export default class Login extends React.Component{
	render() {
		return (
					<div>
								<h1>React_Helloworld_exercise</h1>
								<div>Name <input type="text" name="name"  /></div>
								<div>Email <input type="text" name="email"  /></div>
								<div>City <input type="text" name="city"  /></div>
								<div><button onClick={this.loginSubmit}>Login</button></div>
					</div>

		);
	}
	
	loginSubmit() {
		//this.context.router.push('/summary'); 
		window.location.href="#/summary";
	}
}

