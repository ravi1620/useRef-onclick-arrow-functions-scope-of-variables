import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InterMediateMarksSheet from './components/InterMediateMarksSheet';

class App extends Component {
  render() {
    return (
      <div className="App">
       <InterMediateMarksSheet></InterMediateMarksSheet>
      </div>
    );
  }
}

export default App;
