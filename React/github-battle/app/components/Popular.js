import React from 'react';

export default class Popular extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      };
    });
  }

  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li 
              style={lang === this.state.selectedLanguage ? {color: '#d0021b'}}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}
            >
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}
