import React, { Component } from 'react';
import { TextInput,Image,View,StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class TextInputLogin extends Component {

  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <View style = {{
        flex:1,
        flexDirection: 'column',
      }}>
        <TextInput
          style={styles.textInput}
          placeholder="TextInputLogin "
          placeholderTextColor = '#fff'
          onChangeText={(text) => this.setState({text})}/>

        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          placeholderTextColor = '#fff'
          onChangeText={(text) => this.setState({text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: DEVICE_WIDTH/2,
    borderRadius: 10,
    borderWidth: 1,
    margin:2,
    padding:2,
    borderColor: '#fff',
  }
})
