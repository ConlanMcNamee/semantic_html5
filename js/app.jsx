var React = require('react');
var Body = require('./components/body.jsx');

var App = React.createClass({
	render: function() {
		return (
				<Body />
		)
	}
});

React.render(<App appName="Reactify semantic HTML5" />, document.body);