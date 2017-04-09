let React = require('react');
let Prompt = require('../components/Prompt');
let transparentBg = require('../styles').transparentBg;

let PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return{
      username: ''
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    console.log(this.props);
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
         pathname: '/battle',
         query: {
           playerOne: this.props.routeParams.playerOne,
           playerTwo: this.state.username
         }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function(){
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
});


module.exports = PromptContainer;
