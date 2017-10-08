'use strict';

import React, {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1
  },
  body: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#E9EAED'
  },

// common styles for login page

  scroll:{
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  label: {
      color: '#0d8898',
      fontSize: 20
  },
  alignRight: {
      alignSelf: 'flex-end'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
},
buttonBlueText: {
    fontSize: 20,
    color: '#3B5699'
},
buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
},
inline: {
    flexDirection: 'row'
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20
},
buttonWhiteText: {
  fontSize: 20,
  color: '#FFF',
},
buttonBlackText: {
  fontSize: 20,
  color: '#595856'
},
primaryButton: {
  backgroundColor: '#34A853'
},
footer: {
  marginTop: 30
}

})
