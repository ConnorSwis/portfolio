import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import Page from './components/Page'


class App extends Component {
  state = {
    items: ''
  };
  render() {

    return (
      <div className="w-full h-screen md:p-20 sm:p-{40} bg-gradient-to-tr from-blue-400 to-pink-400">
        <Nav />
        <Page />
        {/* <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center hover:bg-gray-300">
          <div className='text-6xl text-primary-500 hover:text-primary-800'>
            Hello
          </div>
          <div className='text-sm'>My name is Connor J. Swislow</div>
        </div> */}
      </div>
    );
  }
}

export default App;
