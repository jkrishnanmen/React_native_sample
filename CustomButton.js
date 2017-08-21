import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert } from 'react-native';

export default class CustomButton extends Component {
  render() {
    return(
      <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text> button</Text>
        <Button
          backgroundColor = {this.props.color}
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
      </View>
    )
  }
}
