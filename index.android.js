/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import Login from './src/pages/Login';
import Secured from './src/pages/Secured';

export default class TodoListFirebase extends Component {


state = {
  isLoggedIn: false
}

  render() {
    if (this.state.isLoggedIn)
      return <Secured
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TodoListFirebase', () => TodoListFirebase);
