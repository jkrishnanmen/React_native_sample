import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    console.log(this.constructor.name);
    return(
      <Image
        source={require('AwesomeProject/mentornetz_common_modules/resources/backgrounds/logomain.png')}
        flex = {this.props.flex}
        style={{
                resizeMode:'contain',
                width: 200,
                }}>
      </Image>
    );
  }
}
