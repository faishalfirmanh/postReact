/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//1

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
   fetch('https://cobarest.000webhostapp.com/')
    //fetch('http://192.168.0.7/cobares/Getuser.php')
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
    //fetch('http://192.168.0.7/cobares/Tambah.php',{
    fetch('https://cobarest.000webhostapp.com/tambah.php',{
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
          Alert.alert("Sukses")
        })
      .catch((error)=>{
        console.error("ERRO COK");
        })
  }

  ViewUserlist =()=>{
    this.props.navigation.navigate('ViewUserlist')
  }

  renderItem = ({item}) => (
    <TouchableOpacity  style={cssnya.item}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
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
            style={{marginTop:30, width:250}}
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />

      </View>
    );
  }
}

class ViewUserlist extends Component{
  constructor() {

  }
  static navigationOptions={
    title:'DATA USERS'
  }
  render(){
    return(
      <View>
        <Text>
        Data users
        </Text>
      </View>
      )
  }
}

function Pindah({navigation}) {
  return (
    <View>

      <Text>
        Mobil

      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('DaftrMotor')} style={cssnya.toc}>
        <Text style={cssnya.tekToc}>
              back home
        </Text>
      </TouchableOpacity>
    </View>
  );
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
  item: {
    backgroundColor: '#f9c2ff',
    marginTop:10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

// export default PageFunclig1;
