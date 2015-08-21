var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (
			<footer>
				<section id="about"></section>
				<section id="help"></section>
				<section id="appsTools"></section>
				<section id="heart"></section>
				Use of this stie allows us to punch you in the face.
			</footer>
		)
	}
});

module.exports = Footer;