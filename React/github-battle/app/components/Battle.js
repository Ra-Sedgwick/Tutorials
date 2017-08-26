import React from 'react';


export default class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playOneName: '',
      playTwoName: '',
      plyaerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (id, username) {
    this.setState(function () {
      let newState = {};
      newState[id + 'Name'] = username;
      newState[id+ 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

  render () {
    return (
      <div className='home-contianer'>
        <h1>Battle!</h1>
      </div>
    );
  }
}

// Left off, Forms: 10:20.