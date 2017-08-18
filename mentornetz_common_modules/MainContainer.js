import React , { Component } from 'react';
import { View, Image } from 'react-native';
import Home from 'AwesomeProject/mentornetz_common_modules/Home.js';
import FlexDimensionsBasics from 'AwesomeProject/FlexDimensionsBasics.js'

export default class MainContainer extends Component {

  render () {
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

// <FlexDimensionsBasics />
