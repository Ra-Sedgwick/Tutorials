import React from 'react';
import Popular from './Popular';
import { Nav } from './Nav';
let ReactRouter = require('react-router-dom');


let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container' >
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>   
    );
  }
}
