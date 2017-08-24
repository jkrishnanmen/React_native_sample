import React , { Component } from 'react';
import { View, Image } from 'react-native';
// import Home from 'AwesomeProject/mentornetz_common_modules/Home.js';
import TestView from 'AwesomeProject/mentornetz_common_modules/TestView.js'
import LoginScreen from 'AwesomeProject/mentornetz_common_modules/LoginScreen.js'
export default class MainContainer extends Component {

  render () {
    console.log(this.constructor.name);
    return(
      <View style = {{
        flex: 13,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <LoginScreen/>
      </View>
    );
  }
}

// <FlexDimensionsBasics />
2
