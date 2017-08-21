import React, { Component } from 'react';
import { TextInput, View, Image, Text } from 'react-native';
import BackgroundHome from 'AwesomeProject/mentornetz_common_modules/common_components/BackgroundHome.js'
import Logo from 'AwesomeProject/mentornetz_common_modules/common_components/Logo.js'
import TextInputLogin from 'AwesomeProject/mentornetz_common_modules/common_components/TextInputLogin.js'
import CustomButton from 'AwesomeProject/mentornetz_common_modules/common_components/CustomButton.js'
export default class LoginScreen extends Component {
  render() {
    return(
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'space-around'
        }}>
        <View style ={{flex:2}}/>
        <Logo flex = "2"/>
        <TextInputLogin flex = "2"/>
        <CustomButton
          flex = "1"
          name = "LOGIN"
          backgroundColor = "#06c1ca"/>
        <Text style ={{
          backgroundColor: 'rgba(0,0,0,0)',
          flex:.9
        }}>Or</Text>
        <CustomButton
          flex = "1"
          name = "FACEBOOK"
          backgroundColor = "#3b5598"/>
        <Text style ={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0)',
          color: 'white'
        }}>Forgot Password?</Text>
        <View style ={{
          flexDirection: 'row',
          flex: 1
        }}
        >
          <Text style ={{
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
          }}>Dont have an account yet?</Text>
          <Text style ={{
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'white'
          }}>Sign Up</Text>
        </View>

        <View
         style = {{flex:2}}/>
        </View>
    );
  }
}
