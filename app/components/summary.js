import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';


export default class Summary extends React.Component{
    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            <div className="article">
                <div>Welcome [{this.props.name}], we have put your email ([{this.props.email}]) on record.</div>
                <div>The weather in [{this.props.city}] is currently [{this.props.weather}]</div>
            </div>
        )
    }
}
