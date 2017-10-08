/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './src/pages/Login';
import Secured from './src/pages/Secured';
import Signup from './src/pages/Signup';

const firebaseConfig = {
    apiKey: "AIzaSyALzJmJwrnbTLuT956SpPQP4XEsVjJxmA8",
   authDomain: "todolistfirebase-4cc93.firebaseapp.com",
   databaseURL: "https://todolistfirebase-4cc93.firebaseio.com",
   projectId: "todolistfirebase-4cc93",
   storageBucket: "todolistfirebase-4cc93.appspot.com",
   messagingSenderId: "246523711186",
};

if (firebase.app.length) {
    const firebaseAp = firebase.initializeApp(firebaseConfig);
}

export default class TodoListFirebase extends Component {

state = {
  isLoggedIn: false,
}

static navigationOptions = {
  title: 'Welcome',
};

  render() {

    if (this.state.isLoggedIn)
      return <Secured
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <Login navigation={this.props.navigation}
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

const myNav = StackNavigator({
  Home: {screen: TodoListFirebase},
  Signup: { screen: Signup},
  Secured: {screen: Secured}
});

AppRegistry.registerComponent('TodoListFirebase', () => myNav);
