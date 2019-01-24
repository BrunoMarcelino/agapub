import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  ok() {
    alert('Tiako iha Charmella et bon8');
  };


  render() {
    const title = 'This is the application\'s Charmella';
    const test = [
      'Mba potsero moa eto'
    ]
    return (
      <div className="App">
        <div> {
          test.map(element => {
            return <h1 onClick={this.ok}>{element}</h1>
        })
        } </div>
      </div>
    );
  }
}

export default App;
