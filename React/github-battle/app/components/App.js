import React from 'react';
import Popular from './Popular';
import Home from './Home';
import { Nav } from './Nav';
import Battle from './Battle';
let ReactRouter = require('react-router-dom');


let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container' >
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/battle' component={Battle} />         
          <Route path='/popular' component={Popular} />
        </div>
      </Router>   
    );
  }
}
