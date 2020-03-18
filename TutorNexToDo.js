/* @flow */

import React, { Component, useState  } from 'react';
import Todoitem from './componentodo/Todoitem'
import Header from './componentodo/Header'
import Addtodo from './componentodo/Addtodo'
import Sandbox from './componentodo/Sandbox'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
/*besar kecil variabel berpengaruh*/
const TutorNexToDo = ()=>{
  const [todos, setTodos] = useState([
    {text:'tumbas mie',key:'1'},
    {text:'main ps',key:'2'},
  ])
  const rm = (key)=>{
    setTodos((sebelumnya)=>{
      return sebelumnya.filter(td =>td.key != key)
    })
  }
  const submit = (text) =>{
    if (text.length>5) { /*validation*/
      setTodos((sebelu)=>{
        return [
          {text: text, key: Math.random().toString()},
          ...sebelu
        ]
      })
      }
    else {
      alert('kata kurang dari 5')
    }
    }

  return(
    /*<Sandbox/>*/
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
        console.log("browe")
        }}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.content}>
            <Addtodo submit={submit}/>
              <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                  <Todoitem item={item}
                    rm={rm}
                    />
                  )}
                  />
              </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20
  },
  list:{
    marginTop:20,

  },
  content:{
    padding:40,
    backgroundColor:'rgb(236,240,162)',
    flex:1  //otomatis membaut bacground color semua berawrna

  }
});
 export default TutorNexToDo
