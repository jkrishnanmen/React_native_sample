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
    console.log(this.constructor.name);
    return (
      <View
       flex = {this.props.flex}
       style = {{
        flexDirection: 'column',
      }}>
        <TextInput
          style={styles.textInput}
          placeholder="MOBILE NUMBER / EMAIL "
          placeholderTextColor = '#fff'
          onChangeText={(text) => this.setState({text})}/>

        <TextInput
          style={styles.textInput}
          placeholder="PASSWORD"
          placeholderTextColor = '#fff'
          onChangeText={(text) => this.setState({text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: DEVICE_WIDTH/1.5,
    borderRadius: 5,
    borderWidth: 1,
    margin:2,
    padding:10,
    borderColor: '#fff',
  }
})
