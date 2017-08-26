import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
  render () {
    return (
      <div className='home-contianer'>
        <h1>Github Battle: Battle you friends... and stuff.</h1>
        <Link className='button' to='/batle'>
          Battle
        </Link>
      </div>
    );
  }
}