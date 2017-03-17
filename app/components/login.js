import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';
import _ from 'lodash';

export default class Login extends React.Component{
    static propTypes={
        name: PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this)
        this.setData = this.props.actions.setData.bind(this)
        this.checkFlag = false
        let msgs = {errMsgs: {}};
        for(let o in this.propTypes){
            msgs[o] = ""
        }
        this.state = msgs
    }

    handleChange(path,e){
        const value = e.target.value;
        this.setData(path,value)
    }

    loginSubmit(){
        let checkFlag = true;
        let errMsgs = {}
        if(_.trim(this.props.name).length === 0){
            errMsgs.name = "Name must be entered"
            checkFlag = false
        }else if(this.props.name.length > 100){
            errMsgs.name = "Name cannot exceed a length of 100"
            checkFlag = false
        } else {
            errMsgs.name = ""
        }
        if(! /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.props.email)){
            errMsgs.email = "email address is illegal"
            checkFlag = false
        } else {
            errMsgs.email = ""
        }

        this.setState({errMsgs:errMsgs})
        if(checkFlag){
            window.location.href="#/summary"
        }
    }

    render() {
        return (
            <div className="article">
                <div>Name <input name="name" onChange={e => this.handleChange(["name"],e)} value={this.props.name}/><span className="error-msg">{this.state.errMsgs["name"]}</span></div>
                <div>Email <input name="email" onChange={e => this.handleChange(["email"],e)} value={this.props.email}/><span className="error-msg">{this.state.errMsgs["email"]}</span></div>
                <div>City <input name="city" onChange={e => this.handleChange(["city"],e)} value={this.props.city}/><span className="error-msg">{this.state.errMsgs["city"]}</span></div>
                <button onClick={this.loginSubmit}>Login</button>
            </div>
        )
    }
}
