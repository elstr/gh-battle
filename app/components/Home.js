let React = require('react');
let transparentBg = require('../styles').transparentBg;
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

let Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Compare Git Profiles</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
