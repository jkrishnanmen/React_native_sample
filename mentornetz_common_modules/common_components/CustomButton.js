import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
// const CUSTOM_WIDTH = _screen();

export default class CustomButton extends Component {

  _screen(){
    if(DEVICE_WIDTH<440){
      return DEVICE_WIDTH/1.5;
    }
    else return DEVICE_WIDTH;
  }

  _onPressButton() {
    return fetch('https://mentornetz.com/webservice/rest/server.php?wstoken=a8ae49cc747dd1e30239d9eeea1bb96a&moodlewsrestformat=json&wsfunction=local_wstemplate_user_login')
    .then((response) => response.json())
    .then((responseJson)) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource:ds.cloneWithRows(responseJson.movies),
      },function() {
      //   render(){
      //     return(
      //       <View>
      //         <Text> responseJson[0].username</Text>
      //       </View>
      //   );
      // }
    });

  })
  }

  render() {
    console.log(this.constructor.name);
    return(
      <View
      flex = {this.props.flex}
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <TouchableOpacity onPress={this._onPressButton}>
        <View
          style = {styles.button}
          backgroundColor = {this.props.backgroundColor}>
          <Text style={styles.buttonText}>{this.props.name} </Text>
        </View>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: DEVICE_WIDTH/1.5,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
