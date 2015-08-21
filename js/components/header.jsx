var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<nav>
					<a href="reddit front">Front</a>
					<a href="reddit all">All</a>
					<a href="reddit random">Random</a>
				</nav>
			</header>
		)
	}
});

module.exports = Header;