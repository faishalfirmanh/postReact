/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import PageMotor from './page/PageMotor'
import PageMobil from './page/PageMobil'
import PageDetailMotor from './page/PageDetailMotor'
import PageFunclig1 from './page/PageFunclig1'
import PageApi from './page/PageApi'
import PageApi2 from './page/PageApi2'
import PageDaftarClub from './page/PageDaftarClub'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator

} from 'react-native';

//termasuk komponen
function Sapa(props){
  return <Text>{props.nama} <Kendaraan namaTunggangan={props.namaTunggangan}/></Text>
}

function Kosongan() {
    return (
      <View style={{backgroundColor:'white', height:50}}>

      </View>
    );
}
function Kendaraan(props){
  return <Text>{props.namaTunggangan}</Text>
}

function Tombol(props){
  return <Button  title="klick"
          onPress={() =>
          alert('Ini klik dari fungsi ')}/>
}


const cssbaru = StyleSheet.create({
  tombol:{
    width:150,
    borderRadius:10,
  },
  styleTombol:{
    flexDirection:'column',
    height:100
  },
  magin:{
    margin:100
  }


  })
function HomeScreenFungsi({navigation}) {
  return (
    <View>

    <View style={{alignItems:"center", marginTop:30}}>
      <Image source={require('./guin.jpg')} style={styles.imageView}/>

    </View>
      <Text>Home Screen</Text>
      <View style={{alignItems:'center'},cssbaru.styleTombol}>
                <Button
                  title="Details"
                  onPress={() => navigation.navigate('Details')}
                />
              <Kosongan/>
                <Button
                  color="red"
                  title="Daftar Motor"
                  onPress={() => navigation.navigate('DaftrMotor')}
                />
                  <Kosongan/>
                <Button
                  color="rgb(73,230,9)"
                  title="Mobil"
                  onPress={() => navigation.navigate('Mobil')}
                />
                <Kosongan/>
                <Button
                  color="rgb(54,27,33)"
                  title="crud o"
                  onPress={() => navigation.navigate('funcLig')}
                />
                <Kosongan/>
                <Button
                  color="rgb(44,16,121)"
                  title="API"
                  onPress={() => navigation.navigate('api')}
                />
            </View>
    </View>
  )
}



function DetailsScreenFungsi({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ini page Details</Text>
        <Sapa nama="isal" namaTunggangan="jupiter"/>
        <Sapa nama="Zlatan" namaTunggangan ="lambo"/>
        <View  style={{justifyContent: 'center',alignItems: 'center',marginTop:50}}>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.toc}>
            <Text style={styles.tekToc}>
                  back home
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}



const Stack = createStackNavigator();

class Moba extends Component {
    constructor(props) {
      super(props)
      this.state ={
        time: props.start
      }
    }
    componentDidMount(){
      this.addInterval = setInterval(()=> this.incc(),1000)

    }
    componentWillUnmount(){
      clearInterval(this.addInterval)
    }

    incc(){
      this.setSate((state, prop)=>{
          time: parseInt(state.time) + 1
        })
    }
    render(){
      return
      <Text>{this.state.time}</Text>
    }
  }


export default class Cobak extends Component {
  constructor(){
    super() //wajib kalau di state
    this.state ={
      jumlah:0
    }
    this.state.customStyle ={
      color:'rgb(66,203,137)'
    }
    this.state.btnGet ={
      fontSize:30
    }
    setInterval(()=>{
    if (this.state.customStyle.color === 'red') {
      this.setState({
        customStyle:{
          color:'rgb(56,188,223)'
        }
    })
    }
    else {
      this.setState({
        customStyle:{
          color:'red'
        }
    })
    }
  },1000)
}

btnGet(){
  this.setState({})

}
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
              <Stack.Screen name="home" component={HomeScreenFungsi} />
              <Stack.Screen name="Details" component={DetailsScreenFungsi} />
              <Stack.Screen name="DaftrMotor" component={PageMotor} />
              <Stack.Screen name="Mobil" component={PageMobil} />
              <Stack.Screen name="funcLig" component={PageFunclig1} options={{title:"dfsadf"}} />
              <Stack.Screen name="api" component={PageApi2} />
            </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toc:{
    height:50, width:150,
    backgroundColor:'rgb(60,212,22)',
    borderRadius:10
  },
  container: {
    flex: 1,
  },
  imageView: {
    height: 80 ,
    width:80,
    borderRadius : 7,
    resizeMode:'contain'
    //contain
    //cover
    //stretch
},
  tekToc:{
    fontSize:27,
    textAlign:'center'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    color:'rgb(195,3,217)',

  },

});
