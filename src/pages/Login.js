import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyALzJmJwrnbTLuT956SpPQP4XEsVjJxmA8",
    authDomain: "todolistfirebase-4cc93.firebaseapp.com",
    databaseURL: "https://todolistfirebase-4cc93.firebaseio.com",
    projectId: "todolistfirebase-4cc93",
    storageBucket: "todolistfirebase-4cc93.appspot.com",
    messagingSenderId: "246523711186",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Login extends Component {

  state = {
    username: '',
      password: '',
      isLoggingIn: false,
      message: ''
  }

_userLogin = () => {
  this.setState({isLoggingIn: true, message:''});

  // var params = {
  //   username: this.state.username,
  //   password: this.state.password,
  //   grant_type: 'password'
  // };

  // var formBody = [];
  // for (var property in params) {
  //   var encodedKey = encodeURIComponent(property);
  //   var encodedValue = encodeURIComponent([params[property]);
  //   formBody.push(encodeKey + "=" + encodedValue);
  // }
  // formBody = formBody.join("&");

// 00-j8Qo5F08pXUS2ntI8hf9sXOLVQZeT9hOZrlhwfm
  // var proceed = false;
  // fetch("https://dev-570921.oktapreview.com/oauth2/default", {
  //                 method: "POST",
  //                 headers: {
  //                     'Content-Type': 'application/x-www-form-urlencoded'
  //                 },
  //                 body: formBody
  //             })
  //             .then((response) => response.json())
  //             .then((response) => {
  //                 if (response.status==200) proceed = true;
  //                 else this.setState({ message: response.message });
  //             })
  //             .then(() => {
  //                 this.setState({ isLoggingIn: false })
  //                 if (proceed) this.props.onLoginPress();
  //             })
  //             .catch(err => {
  // 				this.setState({ message: err.message });
  // 				this.setState({ isLoggingIn: false })
  // 			});




}

  render() {
    return (
      <ScrollView style={{padding: 20}}>
      <Text
        style={{fontSize: 27}}>
          Login
      </Text>
      <TextInput placeholder='Username'
          onChangeText={(text) => this.setState({username})}
       />
      <TextInput placeholder='Password' />
      <View style={{margin: 7}} />
      {this.state.isLoggingIn && <ActivityIndicator />}

      {!!this.state.message && (
        <Text style={{fontSize: 14, color: 'red', padding: 5}}>
        {this.state.message}
        </Text>
      )}

      <Button
      disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
      onPress={this._userLogin}
      title="Submit"
      />
      </ScrollView>

    )
  }

}
