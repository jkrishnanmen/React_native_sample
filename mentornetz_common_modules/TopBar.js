import React, { Component } from 'react';
import {View} from 'react-native';
export default class TopBar extends Component {
  render () {
    return (
      <View style = {{
        flex: 1,
        backgroundColor: 'green',
        height: 5,
        width: null,
        justifyContent: 'flex-start',//flex-start,center,flex-end,space-around,space-between
        alignItems: 'flex-start'//center,flex-end,stretch,flex-start
      }}>
    </View>
    );
  }
}
