/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Flaxbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.warn1}>
        <Text>Flaxbox</Text>
        </View>
        <View style={styles.warn2}>
        <Text>Flaxbox</Text>
            <View style={styles.dua}>

            </View>
            <View style={styles.tiga}>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'col'

  },
  warn1:{
    flex:1,
    backgroundColor:'rgb(0,182,138)'
  },
  warn2:{
    flex:1,
    backgroundColor:'rgb(250,241,30)',
    flexDirection:'row',
  },
  dua:{
    flex:2,
    backgroundColor:'rgb(172,172,172)'
  },
  tiga:{
    flex:1,
    backgroundColor:'rgb(233,44,214)'
  }
});
