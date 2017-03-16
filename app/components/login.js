import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';
import _ from 'lodash';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this)
        this.setData = this.props.actions.setData.bind(this)
        this.checkFlag = false
        let msgs = {errMsgs: {}};
        for(let o in this.propTypes){
            msgs[o] = ""
        }
        this.state = msgs
    }
	render() {
		return (
					<div>
								<h1>React_Helloworld_exercise</h1>
								<div>Name <input type="text" name="name" value={this.props.name} /></div>
								<div>Email <input type="text" name="email" value={this.props.email} /></div>
								<div>City <input type="text" name="city" value={this.props.city} /></div>
								<div><button onClick={this.loginSubmit}>Login</button></div>
					</div>

		);
	}
	
	loginSubmit() {
		//this.context.router.push('/summary'); 
		window.location.href="#/summary";
	}
}

