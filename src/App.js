import React, { Component } from 'react';


import Header from './components/layouts/Header'
import Home from './pages/Home'
import User from './pages/User'

import {Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
        </div>
      </div>
    );
  }
}

export default App;
