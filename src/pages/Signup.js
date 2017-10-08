'use strict';
import {
  Appregistry,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';

import styles from '../styles/baseStyles.js';
import React, {Component} from 'react';
import * as firebase from 'firebase';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // used to display a progress indicator if waitinf for a network response.
      isLoading: false,
      // entered credentials
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Registration',
  };

  // a method to pass the username and password to firebase and make a a new user account
  signup = () => {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      isLoading: true
    });

    // Make a call to firebase to create a new user.
        firebase.auth().createUserWithEmailAndPassword(
          this.state.email,
          this.state.password).then(() => {
            // then and catch are methods that we call on the Promise returned from
            // createUserWithEmailAndPassword

            // Make a call to firebase to log in user.
                firebase.auth().signInWithEmailAndPassword(
                  this.state.email,
                  this.state.password).then(() => {
                    // then and catch are methods that we call on the Promise returned from
                    // signInWithEmailAndPassword
                    alert('Your account was created!');
                    this.setState({
                      // Clear out the fields when the user logs in and hide the progress indicator.
                      email: '',
                      password: '',
                      isLoading: false
                    });

                    // Take user to secure screen
                    const { navigate } = this.props.navigation;
                    navigate('Secured');

                }).catch((error1) => {
                  // Leave the fields filled when an error occurs and hide the progress indicator.
                  this.setState({
                    isLoading: false
                  });
                  alert("Log in failed: " + error1.message );
                });


        }).catch((error2) => {
          // Leave the fields filled when an error occurs and hide the progress indicator.
          this.setState({
            isLoading: false
          });
          alert("Account creation failed: " + error2.message );

        });
      }


      render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.isLoading ? <ActivityIndicator size="large"/> :
      <View>
        <TextInput
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"Email Address"} />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          style={{marginBottom: 10}}
          placeholder={"Password"} />
        <Button
        title="Register"
        disabled={this.state.email.length < 1 || this.state.password.length < 1 || this.state.isLoading}
        onPress={this.signup}
         />
      </View>;

    // A simple UI with a toolbar, and content below it.
        return (
                <View style={{padding: 20}}>
        <View>
          {content}
        </View>
      </View>
                )
  }

}
