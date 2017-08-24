import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

// var className = "hai";


export default class Movies extends Component{
  constructor(props) {
    super(props);
    console.log(this.constructor.name + " constructor(props)");
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // className = this.constructor.name;
    console.log(this.constructor.name + " componentDidMount");
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this.constructor.name + " responseJson = " + responseJson);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        console.log(this.constructor.name + " ds = " + ds);

        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
          titles: (responseJson.title),
          movies: (responseJson.movies),
        }, function(){
          console.log(this.constructor.name + " this.setState");
          console.log(this.constructor.name + " movies = " + (this.state.movies[0].title));
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
      <Text>{this.state.titles}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}
            </Text>}
          />
      </View>
    );
  }
}
