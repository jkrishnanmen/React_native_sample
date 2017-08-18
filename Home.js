import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

class Home extends Component {

  state = {
    myState: 'Lorem ipsum dolor sit amet,'
  }

  updateState = () => this.setState({ myState: 'new State'})

  render () {
    return (

      <View>
        <Text onPress = {this.updateState}>
          {this.state.myState}
        </Text>
      </View>
    );
  }

}
export default Home;
