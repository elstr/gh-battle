let React = require('react')
let PropTypes = React.PropTypes

function UserDetailsWrapper(props){
  return(
    <div className="col-sm-6">
      <p className="lead">
        {props.header}
      </p>
      {props.children}
    </div>
  )
}


module.exports = UserDetailsWrapper;
