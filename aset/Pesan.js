/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class Pesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
    count:3,
    pesannya:""
    };
  }
  fungsiUbahPesan(){
    this.setState({
      pesannya: "Welcome land of Down"
    })
  }
  increment(){
    // this.state.count = this.state.count + 1
    this.setState(
      {
      count: this.state.count + 1 //1 param obj
      },()=>{
      console.log("From Callback", this.state.count); //,2 arrow function callback
    })
    console.log('dari consolo',this.state.count); //from singkronus
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, textAlign:'center'}}>{this.state.count}</Text>
        <Button
        title="kumpulkan stak aldos" color="rgb(209,238,39)"
         onPress={()=>this.increment()}/>
        <Button
        title="Abse" onPress={()=>this.fungsiUbahPesan()}/>
        <Text style={{fontSize:30, textAlign:'center'}}>{this.state.pesannya}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Pesan
