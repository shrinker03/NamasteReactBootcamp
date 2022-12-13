import React, { Component } from 'react';
import Profile from './Profile';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('Parent - Constructor');
    this.state = {
      name: 'SD'
    };
  }

  componentDidMount() {
    console.log('Parent - DidMount');
    this.setState({ name: 'Sd' });
  }

  componentDidUpdate() {
    console.log('Parent- DidUpdate');
  }

  render() {
    console.log('Parent - Render');
    return (
      <div>
        <h1>About !!!</h1>
        <h5>
          Welcome to about you will all the latest events here as well as you can also see the
          profile section here
        </h5>
        <Profile name={this.state.name} />
      </div>
    );
  }
}

export default About;
