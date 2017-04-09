let React = require('react');
let PropTypes = React.PropTypes;
let Results = require('../components/Results')
let githubHelpers = require('../utils/githubHelpers')

const ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    };
  },
  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
      console.log(this.state.scores);
  },
  render: function() {
    return (
      <Results
      isLoading={this.state.isLoading}
      scores={this.state.scores}
      playersInfo = {this.props.location.state.playersInfo} />
    )
  }
})

module.exports = ResultsContainer
