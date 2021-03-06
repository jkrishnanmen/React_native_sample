import React, { Component } from 'react';
import { View , Image , StyleSheet } from 'react-native';
// import GreyBox from 'AwesomeProject/mentornetz_common_modules/GreyBox.js'

export default class BottomBar extends Component {
  render() {
    console.log(this.constructor.name);
    return (
      <View style ={{
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',//flex-start,center,flex-end,space-around,space-between
        alignItems: 'flex-end'//center,flex-end,stretch,flex-start
      }}>
        <View style={styles.greybar}>
        <Image
          source={require('AwesomeProject/resources/buttons/ic_explore_blue_48dp.png')}
          style ={styles.buttonSpec}/>
        </View>
        <View style={styles.greybar}>
        <Image
          source={require('AwesomeProject/resources/buttons/ic_home_blue_48dp.png')}
          style ={styles.buttonSpec}/>
        </View>
        <View style={styles.greybar}>
        <Image
          source={require('AwesomeProject/resources/buttons/ic_info_blue_48dp.png')}
          style ={styles.buttonSpec}/>
        </View>
        <View style={styles.greybar}>
        <Image
          source={require('AwesomeProject/resources/buttons/ic_lock_open_blue_48dp.png')}
          style ={styles.buttonSpec}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greybar: {
    flex: 1,
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    padding: 10,
    alignItems: 'center'
  },

  buttonSpec: {
    flex: 1,
    width: 30,
    height: 30
  }
})
