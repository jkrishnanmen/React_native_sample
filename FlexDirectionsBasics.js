import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',//column
        // justifyContent: 'space-between',//center
        justifyContent: 'center',//center, space-between
        alignItems: 'center'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
};
