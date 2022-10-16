import React, { Component } from 'react';
import Nav from './components/Nav';
import Page from './components/Page'
import "./App.css";


class App extends Component {
  state = {
    items: ''
  };
  render() {

    return (
      <div className="object-scale-down  ">
        <Nav />
        <Page />
      </div>
    );
  }
}

export default App;
