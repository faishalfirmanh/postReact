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
const Stack = createStackNavigator();


function Mobil({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View  style={{justifyContent: 'center',alignItems: 'center',marginTop:50}}>
            <Text style={{fontSize:30}}>Mobil</Text>
          </View>
      </View>
      )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Mobil
