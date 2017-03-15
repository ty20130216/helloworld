import React from 'react';

const Index = React.createClass({
  render() {
    return (
    	<div className="container body">
			   Welcome [Name], we have put your email ([Email]) on record. The weather in [City] is currently [Weather]
		  </div>
    );
  },
	componentDidMount() {
		$('body').attr('class', 'nav-md')
		$('.right_col').css('min-height', $(window).height())
	}
});

module.exports = Index;