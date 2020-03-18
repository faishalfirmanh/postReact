/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function Sandbox(){

    return (
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.box1}>Bok1</Text>
        <Text style={styles.box2}>Bok2</Text>
        <Text style={styles.box3}>Bok3</Text>
        <Text style={styles.box4}>Bok4</Text>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-around',
    paddingTop:40,
    alignItems:'flex-end',
    backgroundColor:'rgb(130,247,48)',
    flexDirection:'row' //mangatur style pada flex, dfalutnya
  },
  box1:{
    flex:1,
    backgroundColor:'rgb(36,221,227)',
    padding:10
  },
  box2:{
    flex:1,
    backgroundColor:'rgb(251,87,18)',
    padding:20
  },
  box3:{
    flex:1,
    backgroundColor:'rgb(27,163,135)',
    padding:30
  },
  box4:{
    flex:1,
    backgroundColor:'gold',
    padding:40
  }

});
