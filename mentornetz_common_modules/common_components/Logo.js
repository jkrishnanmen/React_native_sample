import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return(
      <Image
        source={require('AwesomeProject/resources/backgrounds/logomain.png')}
        style={{
                flex: 1,
                resizeMode:'contain',
                width: 200,
                }}>
      </Image>
    );
  }
}
