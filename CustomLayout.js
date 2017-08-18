import React, { Component } from 'react';
import {Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity,
   TouchableNativeFeedback,TouchableWithoutFeedback, View} from 'react-native';

   export default class CustomLayout extends Component {
     _onPressButton() {
       Alert.alert("You Tapped the button")
     }

     _onLongPressButton() {
       Alert.alert("You long-pressed the button")
     }

     render() {
       return (
         <View style={{paddingTop:60,alignItems:'center'}}>
           <TouchableHighlight onPress     = {this._onPressButton}
                               onLongPress = {this._onLongPressButton}
                               underlayColor="white"
                               style ={{backgroundColor:"blue",padding:30}}>

             <Text Style={{marginBottom: 30,
                            width: 60,
                            alignItems: 'center',
                            backgroundColor: '#2196F3'}}>
               TouchableHighlight
              </Text>
           </TouchableHighlight>

          <TouchableOpacity onPress     = {this._onPressButton}
                            onLongPress = {this._onLongPressButton}
                            underlayColor="white">
            <Text style={{marginBottom: 50,
                          alignItems: 'center',
                          backgroundColor:"black",
                          color: "white",
                          padding: 20}}>
              TouchableOpacity
            </Text>
          </TouchableOpacity>
        </View>


       )
     }
   }
