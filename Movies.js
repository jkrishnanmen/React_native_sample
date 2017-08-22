import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

const className = this.constructor.name;

export default class Movies extends Component {
  constructor(props) {
    super(props);
    console.log(this.constructor.name + " constructor(props)");
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log(this.constructor.name + " componentDidMount");
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this.constructor.name + " responseJson");
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function(){
          console.log(this.constructor.name + " this.setState");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(this.constructor.name + " render");
    if (this.state.isLoading) {
      console.log(this.constructor.name + " this.state.isLoading");
      return (
        <View style = {{flex: 1, paddingTop: 50}}>
         <ActivityIndicator/>
        </View>
      );
    }

    return(
      <View style={{flex: 1, paddingTop: 20, paddingLeft: 30}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}
            </Text>}
          />
      </View>
    );
  }
}
