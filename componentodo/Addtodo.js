/* @flow */

import React, { Component, useState } from 'react';
import { Icon } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default function Addtodo({submit}) {
  const [text,setText] = useState('')
  const change = (val) =>{
    setText(val)

  }
  return(
    <View>
        <TextInput
        style={styles.input}
        placeholder="tambah aktifitas"
        onChangeText={change}
        />
        <Button
        title="simpan"
        color="rgb(24,10,175)"
        onPress={()=>submit(text)}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
     borderWidth: 5,
     borderColor: 'rgb(80,201,70)',
     padding: 6,
     margin: 10,
     width: 250,
   },
});
