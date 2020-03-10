/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

const dataMotor = [
  {
    id:'1',
    nama: 'supra',
    cc:125,
    img: require('./../aset/Gambar/supra.jpg')
  },
  {
    id:'2',
    nama: 'ninja250',
    cc:250
  },
  {
    id: '3',
    nama: 'satria',
    cc:150
  },
];

function Item({nama, cc}) {
  return (
    <View style={cssnya.item}>
    <TouchableOpacity>
      <Text style={cssnya.text}>{nama}</Text>
      <Text style={cssnya.text}>{cc}</Text>
    </TouchableOpacity>
    </View>
  );

}

export default class DaftrMotor extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  getPesanSupar(){
    this.setState({ //penting
      pesan:"gambar SUPRA telah diklik"
      })
  }

  getPesanSatria(){
    this.setState({
      pesanSat:"Satria telah diklik"
      })
  }

  itemKlik(){

  }

  render(){
  return (
    <View>
        <View>
          <Text>ini daftr motor</Text>
          <SafeAreaView>
            <FlatList
              data={dataMotor}
              renderItem={({ item }) => <Item nama={item.nama} cc={item.cc} />}
              keyExtractor={nama => nama.id}
            />
          </SafeAreaView>
        </View>
      <TouchableOpacity onPress={()=>{this.getPesanSupar()}}>
        <Image source={require('./../aset/Gambar/supra.jpg')} style={cssnya.imageView}/>
      </TouchableOpacity>
        <Text style={{fontSize:30}}>{this.state.pesan}</Text>
      <TouchableOpacity onPress={()=>{this.getPesanSatria()}}>
        <Image source={require('./../aset/Gambar/satria.png')} style={cssnya.imageView}/>
      </TouchableOpacity>
        <Text style={{fontSize:30}}>{this.state.pesanSat}</Text>

    </View>
  );
}
}

const cssnya = StyleSheet.create({
  item:{
    flexDirection:'column',
    backgroundColor: 'rgb(246,237,25)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageView: {
    height: 80 ,
    width:100,
    borderRadius : 7,
    resizeMode:'contain'
  },
  text:{
    fontSize:13,
    color:'rgb(5,2,4)',
  }
  })

const Stack = createStackNavigator();



// export default DaftrMotor
//kalau page fungsi
