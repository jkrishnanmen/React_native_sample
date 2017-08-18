import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';

export default class Home extends Component {
  render() {
    return(
      <View style ={{backgroundColor: 'red'}}>
      <Image
        source={require('AwesomeProject/resources/backgrounds/logomain.png')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          // alignItems: 'center',
          width: 200,
          marginTop: 40,
          marginBottom: 30,
          }}/>

        <TextInput
          style={{
            flex: 1,
            width: 200,
            height: 100,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 300
          }}/>
        </View>
    );
  }
}
