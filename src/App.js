import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import Youtube from './Youtube/Youtube';
import logo from './logo.svg';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/youtube">Youtube</Link></li>
                        <li><Link to="/reactstrap">Reactstrap</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" render={() => (
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    )}/>
                    <Route path="/reactstrap" render={() => (
                        <Button color="danger">Danger!</Button>
                    )}/>
                    <Route path="/youtube" component={Youtube}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;