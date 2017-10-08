import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';

export default class Secured extends Component {

_userLogOut = () => {

  const pressbutton = this.props;
  // Make a call to firebase to log out user.
      firebase.auth().signOut().then(() => {
          // then and catch are methods that we call on the Promise returned from
          // signOut
          // Take user to log in screen
            const { navigate } = this.props.navigation;
            navigate('Home');

      }).catch((error) => {
        // Leave the fields filled when an error occurs and hide the progress indicator.
        alert("Log in failed: " + error.message );
      });
}

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text
          style={{dontSize: 27}}>
          Welcome
        </Text
        >
        <View style={{margin: 20}} />
        <Button
            onPress={this._userLogOut}
            title="Log out"
            />
            </ScrollView>
    )
  }
}
