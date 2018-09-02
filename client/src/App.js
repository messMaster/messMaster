import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';
import './App.css';

import Login from './components/auth/Login';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyDhN6xRXWjCxD2YBjN2DJWk3JbXqV9FP3o',
      authDomain: 'messmaster-d21ae.firebaseapp.com',
      databaseURL: 'https://messmaster-d21ae.firebaseio.com',
      projectId: 'messmaster-d21ae',
      storageBucket: 'messmaster-d21ae.appspot.com',
      messagingSenderId: '500219836987'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/register" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
