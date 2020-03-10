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

function PageDaftarClub(){
  return(
    <View>
      <Text>
        ini dari Page Daftar club
      </Text>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageDaftarClub
