/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgb(235,93,195)'}}>
        <Text style={{fontSize:30}}>Ini dari Footer</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
