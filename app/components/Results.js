let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles');

let MainContainer = require('./MainContainer');
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');

function Results(props){
  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 0 ? 1 : 0;


  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
    </MainContainer>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
