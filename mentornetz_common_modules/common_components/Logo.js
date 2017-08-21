import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return(
      <Image
        source={require('AwesomeProject/resources/backgrounds/logomain.png')}
        flex = {this.props.flex}
        style={{
                resizeMode:'contain',
                width: 200,
                }}>
      </Image>
    );
  }
}
