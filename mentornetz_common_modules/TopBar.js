import React, { Component } from 'react';
import {View} from 'react-native';

export default class TopBar extends Component {
  render () {
    console.log(this.constructor.name);
    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#06c1ca',
        height: 5,
        width: null,
        justifyContent: 'flex-start',//flex-start,center,flex-end,space-around,space-between
        alignItems: 'flex-start'//center,flex-end,stretch,flex-start
      }}>
    </View>
    );
  }
}
