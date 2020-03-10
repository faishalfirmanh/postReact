/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgb(119,58,237)'}}>
        <Text style={{fontSize:30}}>Ini dari header</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
