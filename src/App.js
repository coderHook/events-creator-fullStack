import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import Routes from './components/Routes'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
