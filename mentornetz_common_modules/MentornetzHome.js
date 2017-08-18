import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import BackgroundHome from 'AwesomeProject/mentornetz_common_modules/BackgroundHome.js';
import BottomBar from 'AwesomeProject/mentornetz_common_modules/BottomBar.js';
import MainContainer from 'AwesomeProject/mentornetz_common_modules/MainContainer.js';
import TopBar from 'AwesomeProject/mentornetz_common_modules/TopBar.js'

export default class MentornetzHome extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <BackgroundHome>
        <View style={{
          flex:1,
          flexDirection: 'column',
          justifyContent: 'space-around',//flex-start,center,flex-end,space-around,space-between
          alignItems: 'stretch'//center,flex-end,stretch,flex-start
        }}>
        <TopBar/>
        <MainContainer/>
        <BottomBar/>
        </View>

      </BackgroundHome>
    );
  }
}
