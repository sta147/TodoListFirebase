import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyALzJmJwrnbTLuT956SpPQP4XEsVjJxmA8",
    authDomain: "todolistfirebase-4cc93.firebaseapp.com",
    databaseURL: "https://todolistfirebase-4cc93.firebaseio.com",
    projectId: "todolistfirebase-4cc93",
    storageBucket: "todolistfirebase-4cc93.appspot.com",
    messagingSenderId: "246523711186",
};

if (!firebase.apps.length) {
const firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }
  }

_userLogin = () => {
  this.setState({isLoggingIn: true, message:''});
  this.props.onLoginPress();
  Alert.alert('You have successfully logged in!');
  this.setState({isLoggingIn: false});
}

  render() {
    return (
      <ScrollView style={{padding: 20}}>
      <Text
        style={{fontSize: 27}}>
          Login
      </Text>
      <TextInput placeholder='Username'
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
       />
      <TextInput placeholder='Password'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
       />
      <View style={{margin: 7}} />
      {this.state.isLoggingIn && <ActivityIndicator />}

      {!!this.state.message && (
        <Text style={{fontSize: 14, color: 'red', padding: 5}}>
        {this.state.message}
        </Text>
      )}

      <Button
      disabled={this.state.username.length < 1 || this.state.password.length < 1 || this.state.isLoggingIn}

      onPress={this._userLogin}
      title="Submit"
      />
      </ScrollView>

    )
  }

}
