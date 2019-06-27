import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventListContainer from './components/EventListContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={EventListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
