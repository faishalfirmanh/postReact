import React from 'react';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
TouchableOpacity}
  from 'react-native'

  export default function Todoitem({item, rm}){
    return(
      <TouchableOpacity onPress={()=>rm(item.key)}>
      <View style={{marginRight:-230, marginTop:15}}>
      <Icon name="camera" size={30} color="rgb(230,33,33)" />
      </View>
      <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    item:{
      padding:16,
      marginTop:15,
      borderColor:'rgb(36,95,172)',
      borderWidth:3,
      borderStyle:'dotted',
      borderRadius:10
    }
  })
