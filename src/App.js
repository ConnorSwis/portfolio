import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Page from './components/Page';


class App extends Component {
  state = {
    items: ''
  };
  render() {

    return (
      <div className="App">
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center hover:bg-gray-300">
          <div className='text-6xl text-primary-500 hover:text-primary-800'>
            Hello
          </div>
          <div className='text-sm'>My name is Connor J. Swislow</div>
        </div>
      </div>
    );
  }
}

export default App;
