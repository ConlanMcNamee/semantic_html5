var React = require('react');
var Aside = require('./aside.jsx');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Body = React.createClass({
	render: function() {
		return (
			<main>
				<Header />
				<article class="Post">
					<div class="upVoteDownVote">
						
					</div>
					<div class="redditPost">
						<h1 class="redditPostTitle">This is the top post</h1>
						<footer class="footerLinks"></footer>
					</div>
				</article>
				<article class="Post">
					<div class="upVoteDownVote">
						
					</div>
					<div class="redditPost">
						<h1 class="redditPostTitle">This is the second to top post</h1>
						<footer class="footerLinks"></footer>
					</div>
				</article>
				<footer id="next">
					<button id="nextButton">next </button>
				</footer>
				<Aside />
				<Footer />
			</main>
		)
	}
});

module.exports = Body;