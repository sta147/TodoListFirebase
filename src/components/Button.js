import React, {Component} from 'react';
import styles from '../styles/baseStyles';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const Button = (props) => {
  function getContent(){
    if (props.children) {
      return props.children;
    }
    return <Text style={styles.label}>{props.label}</Text>
  }

  return (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={props.onPress}
      style={[
        props.noDefaultStyles ? '' : styles.button,
        styles ? styles.button : '']}
    >
      {getContent()}
      </TouchableHighlight>
  );
}

export default Button;
