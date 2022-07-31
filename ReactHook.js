/* @flow */

import React, { Component, useState } from 'react';
import Header from './aset/Header'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const ReactHook = ()=>{
  const [count, setCount] = useState(0); //this is hooks
  const [name, setName] = useState('BOKER')
  const [person, setPerson] = useState({name:'marion jola', age:20})
  //in the useState CAN setPObject, string, int ets
  const ubahNama = ()=>{
    console.log("ubah nama")
    setName('diubah menjadi dian')
    setPerson({name:'BRISIA JODIE',age:22})
  }

  return(
    <View style={styles.container}>
    <Header/>
      <Text>{count}</Text>
      <Button title="Press here" onPress={() => setCount(count + 1)}/>
      <Text style={{fontSize:20}}>nama nya {name}</Text>
      <Text style={{fontSize:20}}>penyanyi: {person.name}</Text>
      <Text style={{"fontSize":20}}>usia {person.age} </Text>
      <Button title="ubah"
        onPress={()=>ubahNama()}
        color="red"
        />
    </View>
  )
}

class Cobaloginn extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>I'm the Cobalogin component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttnUbah:{
    color:'rgb(28,242,65)',
    marginTop:20
  }
});

export default ReactHook
