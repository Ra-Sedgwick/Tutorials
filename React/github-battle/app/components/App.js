import React from 'react';
import Popular from './Popular';
import Home from './Home';
import { Nav } from './Nav';
import Battle from './Battle';
let ReactRouter = require('react-router-dom');

let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container' >
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />         
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not Fount</p>
            }} />
          </Switch>   
        </div>
      </Router>   
    );
  }
}
