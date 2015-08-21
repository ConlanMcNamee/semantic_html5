var React = require('react');

var Aside = React.createClass({
	render: function() {
		return (
			<aside>
				<form action="search"></form>
				<button name="submitLink"></button>
				<button name="submitTextPost"></button>
				<button name="CreateSubreddit"></button>
				<div id="redditGoldGoal"></div>
				<section id="recentlyViewed"></section>
			</aside>
		)
	}
});

module.exports = Aside;