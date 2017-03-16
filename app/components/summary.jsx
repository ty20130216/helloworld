import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';

export default class Summary extends React.Component{
  render() {
    return (
    	<div>
			   Welcome [Name], we have put your email ([Email]) on record. The weather in [City] is currently [Weather]
		  </div>
    );
  }
}