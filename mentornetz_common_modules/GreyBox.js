import React, { Component } from 'react';
import { View,Image } from 'react-native';

export default class GreyBox extends Component {
  render() {
    return (
      <View
        style = {{flex: 1,
        backgroundColor: 'grey'}}>
        {this.props.children}
      </View>
    );
  }
}
