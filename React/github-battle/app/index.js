let React = require('react');
let ReactDom = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI


class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

ReactDom.render( 
  <App />,
  document.getElementById('app')
);