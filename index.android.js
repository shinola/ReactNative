/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import Dimensions from 'Dimensions';

class Registry extends Component {
 
 constructor(props) {
    super(props);
    this.username = { text: '' };
  }
  
  render() {
    return (
    <View>
      <Image 
      style={styles.stretch}
      source={require('./img/signin_bg.png')} />
      <Text style={styles.welcome}>sign in to your</Text>
      <Text style={styles.welcome2}>target.com account</Text>
      <Text style={styles.instructions}>Username</Text>
      <TextInput
        style={styles.textinputStyle}
      />
      <Text style={styles.instructions}>Password</Text>
      <TextInput
        style={styles.textinputStyle}
      />
    </View>
    );
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
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  welcome2: {
    fontSize: 30,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 15,
    marginLeft: 15,
  },
  textinputStyle: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  stretch: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3
  }
});

AppRegistry.registerComponent('Registry', () => Registry);
