import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator
} from 'react-native';

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

  // Make a call to firebase to log in user.
      firebase.auth().signInWithEmailAndPassword(
        this.state.username,
        this.state.password).then(() => {
          // then and catch are methods that we call on the Promise returned from
          // signInWithEmailAndPassword
          alert('You have successfully logged in!');
          this.setState({
            // Clear out the fields when the user logs in and hide the progress indicator.
            username: '',
            password: '',
            isLoggingIn: false
          });
          // Take user to secure log in screen
          this.props.onLoginPress();

      }).catch((error) => {
        // Leave the fields filled when an error occurs and hide the progress indicator.
        this.setState({
          isLoggingIn: false
        });
        alert("Log in failed: " + error.message );
      });
}

  render() {
        const { navigate } = this.props.navigation;

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
      secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
       />
      <View style={{margin: 7}} />
      {this.state.isLoggingIn && <ActivityIndicator />}

      {!!this.state.message && (
        // Error message to display if the user was unsuccessful during login.
        <Text style={{fontSize: 14, color: 'red', padding: 5}}>
        {this.state.message}
        </Text>
      )}

      <Button
      // Should disable the button if either password or username or we are waiting on a network call to finish.
      disabled={this.state.username.length < 1 || this.state.password.length < 1 || this.state.isLoggingIn}

      onPress={this._userLogin}
      title="Log in"
      sty
      />

      <View style={{marginTop: 10}}/>

      <Button
      title="Sign up"
      onPress={() =>
          navigate('Signup')
        }
       />

      </ScrollView>

    )
  }

}
