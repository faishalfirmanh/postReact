/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

function func2(){
  console.log(this);
}
// x ={
//   func = function(){
//     console.log(this);
//   }
// }
// x.func()
// func2()

export default class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"edit text"
    };
    this.handleChangeText = this.handleChangeText.bind(this)
  }
  handleChangeText(newText){
    this.setState({
      value:newText
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>
        masukkan username
      </Text>
        <TextInput style={{backgroundColor:'rgb(99,255,196)',fontSize:20}}
        defaultValue = {this.state.value}
        onChangeText={this.handleChangeText}
        />
        <Text>edit tek{this.state.value}</Text>
        <Text>
          masukkan password
        </Text>
          <TextInput style={{backgroundColor:'rgb(99,255,196)',fontSize:20}}
          defaultValue = {this.state.value}
          onChangeText={this.handleChangeText}
          />
          <Text>{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding:25
  },
});
