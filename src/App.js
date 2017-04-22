import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default App;