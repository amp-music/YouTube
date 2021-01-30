import logo from './logo.svg';
import './App.css';
import {authenticate, loadClient, execute} from './youtube.js'
import React, { Component } from 'react';
// I probably should be using a class component?
export default class App extends Component {
  render() {
    // authenticate()
    // loadClient()
    // execute()
    this.getData = () => {
      const data = execute();
      console.log("DATA", data);
    }

    return (
      <div className="App">
        <header className="App-header">
          
        </header>
          <button onClick={authenticate}>Authorize YouTube</button>
          <button onClick={loadClient}>Load Gapi Client</button>
          <button onClick= {this.getData}>Execute API Request</button>
      </div>
    );
  }
}

/* 
I can also just do this above by writing...
  "export default function App() {..."
*/
// export default App;

