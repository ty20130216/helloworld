import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';

export default class Silder extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        let content;
        if (this.props.name && !_.isEmpty(this.props.name)) {
            content =  "Hello ["+this.props.name+"]";
        } else {
            content = '';
        }
        return (
            <div>
                <div className="nav">{content}</div>
            </div>
        )
    }
}
