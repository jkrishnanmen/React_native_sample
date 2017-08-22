import React, { Component } from 'react';
import { View,Image } from 'react-native';

export default class BackgroundHome extends Component {
  render() {
    console.log(this.constructor.name);
    return (
      <View style={{flex:1}}>
        <Image
          source={require('AwesomeProject/resources/backgrounds/app_background1.png')}
          style={{flex:1,
                  width:null,
                  height:null,
                  resizeMode:'cover'}}>
                  {this.props.children}
        </Image>
      </View>
    );
  }
}
