/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class PageDetailMotor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PageDetailMotor component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
