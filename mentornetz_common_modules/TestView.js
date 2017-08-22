import React , { Component } from 'react';
import { View, Image } from 'react-native';
import FlexDimensionsBasics from 'AwesomeProject/FlexDimensionsBasics.js'

export default class TestView extends Component {

  render () {
    console.log(this.constructor.name);
    return(
      <View style = {{
        flex: 13,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Image
          source ={require('AwesomeProject/resources/backgrounds/checkerboard.png')}
          style ={{flex: 1,
            resizeMode: 'contain'
          }}
          >
        </Image>
      </View>
    );
  }
}
