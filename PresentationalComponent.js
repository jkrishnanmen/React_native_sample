import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
  return (
    <View>
      // <Text onPress = { props.updateState }>
      //   { props.myState }
      // </Text>

      <Text style = { styles.myState }>
        { props.myState }
      </Text>
    </View>
  )
}

export default PresentationalComponent

const styles = StyleSheet.create ({
  // console.log('yea,seriously'); 
  myState: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
