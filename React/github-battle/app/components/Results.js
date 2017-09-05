import React from 'react';
import queryString from 'query-string';
let api = require('../utils/api');

export default class Result extends React.Component {
  componentDidMount() {
    let players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      console.log(results);
    });
  }
  render() {
    
    return (
      <div>
        Results
      </div>
    );
  }
}