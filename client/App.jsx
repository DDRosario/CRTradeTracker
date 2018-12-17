import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clan: '',
      user: '',
      loggedIn: false
    };
  }
  componentDidMount() {
    axios.get('/').then;
  }
  render() {
    return <div>hello from React</div>;
  }
}
