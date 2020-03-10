/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  FlatList,
  Item
} from 'react-native';

//
export default class PageFunclig1 extends Component {
  constructor(props){
      super(props)
      this.state={
        isloading:true,
        dataSource:[],
        textInputName :'',
        textInputAge :'',

      }
  }

  componentDidMount(){
    fetch('http://192.168.0.2/cobares/Getuser.php')
    .then((respon)=>
      respon.json()
    )
    .then((responseJson)=>{
      this.setState({
        isloading:false,
        dataSource:responseJson
      })
    })
  }

  insertUsers = ()=>{
    const {textInputName}= this.state
    const {textInputAge} = this.state
    fetch('http://192.168.0.2/cobares/Tambah.php',{
      method:'POST',
      header:{
        Accept :'application/json',
        'content-Type' :'application/json'
      },
      body: JSON.stringify({
          name:textInputName,
          age:textInputAge
        })
      })
      .then((response)=>
        response.json())
      .then((responJson)=>{
        this.setState({
            item:responJson.name
          })
        })
      .catch((error)=>{
        console.error("ERRO COK");
        })
  }

  renderItem = ({item}) => (
    <TouchableOpacity onPress={() => alert(item.age)}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )



  render() {
    return (
      <View style={cssnya.container}>
        <Text>Page CRUDt</Text>
        <Text>
          masukkan nama brow
        </Text>
        <TextInput
           style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:100 }}
           placeholder ="masuukkan nama"
           onChangeText = {TextInputValue =>this.setState({textInputName: TextInputValue})}
         />
         <Text>
           masukkan usia
         </Text>
         <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:100 }}
            placeholder ="masuukkan nama"
            onChangeText = {TextInputValue =>this.setState({textInputAge: TextInputValue})}
          />
          <TouchableOpacity style={{backgroundColor:'rgb(52,103,255)',
          borderRadius:10, width:140, height:50}}
          onPress={this.insertUsers}>
            <Text style={{fontSize:20,color:'white', textAlign:'center'}}>
              Simpan
            </Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
      </View>
    );
  }
}




const cssnya = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  imageView: {
    height: 60 ,
    width:60,
    borderRadius : 7,
    resizeMode:'contain'
  },
  toc:{
    height:50, width:150,
    backgroundColor:'rgb(60,212,22)',
    borderRadius:10
  },
});
