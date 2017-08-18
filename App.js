import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Orientation from 'react-native-orientation-locker';
// import mentornetz_common_modules from 'mentornetz_common_modules';
import Home from './Home.js'
import Bananas from './Bananas.js'
import LotsOfGreetings from './LotsOfGreetings.js'
import Blink from './Blink.js'
import LotsOfStyles from './LotsOfStyles.js'
import FixedDimensionsBasics from './FixedDimensionsBasics.js'
import FlexDimensionsBasics from './FlexDimensionsBasics.js'
import FlexDirectionsBasics from './FlexDirectionsBasics.js'
import PizzaTranslator from './PizzaTranslator.js'
import CustomButton from './CustomButton.js'
import ButtonBasics from './ButtonBasics.js'
import Touchables from './Touchables.js'
import CustomLayout from './CustomLayout.js'
// import MentornetzLaunch from './mentornetz_common_modules/MentornetzLaunch.js'
// import MentornetzHome from './mentornetz_common_modules/MentornetzHome.js'
import JustifyContentBasics from './JustifyContentBasics.js'
import BottomBar from './mentornetz_common_modules/BottomBar.js'
import LoginScreen from './mentornetz_common_modules/LoginScreen.js'

export default class App extends React.Component {

  // _onOrientationDidChange: function(orientation) {
  //   if (orientation == 'LANDSCAPE-LEFT') {
  //
  //   } else {
  //
  //   }
  // },
  //
  // componentWillMount: function() {
  //   var initial = Orienatation.getInitialOrientation();
  //   if( initial ==='PORTRAIT') {
  //
  //   } else {
  //
  //   }
  // },
  //
  // componentDidMount: function() {
  //   Orientation.lockToPortrait();
  //   // Orienation.lockaToLandscapeLeft();
  //   //Orientation.unlockAllOrientations();
  //   Orientation.addOrientationListener(this._onOrientationDidChange);
  // },
  //
  // componentWillUnmount: function() {
  //   Orientation.getOrientation((orientation)=> {
  //     console.log("Current Device Orientation: ", orientation);
  //   });
  //   Orientation.removeOrientationListener(this._onOrientationDidChange);
  // }

  render() {
    return (
      // <View style={styles.container}>
      <View style={{
        // source ={require('./mentornetz_common_modules/BottomBar.js')},
        flex: 1,
        // flexDirection: 'row',//column
        // justifyContent: 'center',//center, space-between
        // alignItems: 'center'
      }}>

        <LoginScreen/>
      </View>

      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      // </View>

      // <View style={{flex:1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
