import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test from './Components/Test';
import List from './Components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/test' component={Test}/> 
              <Route path='/list' component={List}/>
            </Switch>
          </BrowserRouter>   
      </div>
    );
  }
}

export default App;