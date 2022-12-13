import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('Child - Constructor');
    this.state = { name: 'Shivam' };
  }

  componentDidMount() {
    console.log('Child - DidMount');
    this.setState({ name: 'Damre' });
  }

  componentDidUpdate() {
    console.log('Child - DidUpdate');
    // if (prevProps != this.state) {
    //   this.setState({ name: 'Shivam' });
    // }
  }

  render() {
    console.log('Child - Render');
    return (
      <div>
        Profile from Parent:- {this.props.name}
        This is from child:- {this.state.name}
      </div>
    );
  }
}
