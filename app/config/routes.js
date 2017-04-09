let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let hashHistory = ReactRouter.hashHistory;

let Main = require('../components/Main');
let Home = require('../components/Home');
let PromptContainer = require('../containers/PromptContainer');
let ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
let ResultsContainer = require('../containers/ResultsContainer');


let routes = (
  <Router history = {hashHistory}>
    <Route path = '/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer}></Route>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}></Route>
      <Route path='battle' component={ConfirmBattleContainer}></Route>
      <Route path='results' component={ResultsContainer}></Route>
    </Route>
  </Router>
);

module.exports = routes;
