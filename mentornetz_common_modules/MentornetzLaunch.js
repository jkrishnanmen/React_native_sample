import React, { Component } from 'react';
import { View, Image } from 'react-native';
import BackgroundImage from './mentornetz_common_modules/BackgroundImage.js'
export default class MentornetzLaunch extends Component {
  render(){
    console.log(this.constructor.name);
    return(
      <BackgroundImage
        style={{
          flex:1,
        }}>
        <View
        style={{
          flex:1,
          alignItems: 'center'
        }}>
          <Image
            source={require('./resources/backgrounds/logomain.png')}
            style={{
                    flex: 1,
                    resizeMode:'contain',
                    alignItems:'center',
                    // justifyContent: 'center',
                    width: 200,
                    }}>
          </Image>
        </View>

      </BackgroundImage>
    )
  }
}
