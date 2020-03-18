/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header2 =(props)=>{ //atau ({name})


  return(
    <View style={{backgroundColor:'rgb(43,218,129)',width:'100%', height:60}}>
      <Text style={{fontSize:20}}>
        {props.name}
      </Text>
    </View>
  )
}
Header2.defaultProps ={
  name:'ini default props ketika name kosong'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Header2
