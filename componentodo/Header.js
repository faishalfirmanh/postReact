/* @flow */

import React, { Component } from 'react';
import {globalStyle} from '../styles/Global'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';

//cara impor gllobal styles, nama variabel, nama property cssnya

const getFont = ()=>{
  return Font.loadAsync({

  })
}
//FascinateInline-Regular
export default function Header(){
  return(
    <View style={styles.heder}>
      <Text style={globalStyle.fontCustum}>aku yang tersaikiti</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heder:{
    height:80,
    paddingTop:38,
    backgroundColor:'rgb(122,228,99)'
  },
  title:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',


  }
});
