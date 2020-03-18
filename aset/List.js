/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListView,
} from 'react-native';

const List =(item)=>{ //atau ({name}

  return(
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text>{item.nama}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem:{
    backgroundColor:"rgb(232,223,104)",
    padding:15,
    borderBottomWidth:1,
    borderColor:'rgb(32,8,10)'
  },

  listItemView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  }
});

export default List
