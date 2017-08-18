import React, { Component } from 'react';
import { TextInput, View, Image } from 'react-native';
import BackgroundHome from 'AwesomeProject/mentornetz_common_modules/common_components/BackgroundHome.js'
import Logo from 'AwesomeProject/mentornetz_common_modules/common_components/Logo.js'
import TextInputLogin from 'AwesomeProject/mentornetz_common_modules/common_components/TextInputLogin.js'
export default class LoginScreen extends Component {
  render() {
    return(
      <BackgroundHome>
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'space-around'
        }}>
        <Logo/>
        <TextInputLogin/>
        </View>
      </BackgroundHome>

    );
  }
}
