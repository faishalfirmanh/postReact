/* @flow */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Button
} from 'react-native';

const Stack = createStackNavigator();

export default class PageApi extends Component {
  constructor() {
    super();
    this.state = {
      jsonData:'',
      isloading:true,
      dataSource :[],
      text:'',
      desc:'',
      item:'',

    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respon)=>{
      respon.json()
    })
    .then((respnJson)=>{
      this.setState({
        isloading:false,
        dataSource:respnJson
      })
    })

  }

  getMessage(){
    this.setState({
      pesan:"Ini pesan"
    })
  }
    rendItem = ({item})=>(
      <Text>{item.title}</Text>
      )

  render() {
    if (this.state.isloading) {
      return(
        <View>
          <Text>
            saat ini loading
          </Text>
        </View>
        )
    }
    else {
      return(
        <View>
            <Button title="Go" onPress={this.getData}/>
            <Text>{this.state.item}</Text>

        </View>
      )
        }
    }

    getData  = async () =>{
            fetch('https://facebook.github.io/react-native/movies.json')
             .then((response) => response.json())
             .then((responseJson) => {
              this.setState({
                text:responseJson.title,
                desc:responseJson.description,
                item:responseJson.movies[2].title
              })

             })
             .catch((error) => {
               console.error(error);
             });
           }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },
  fontButon:{
    color:'rgb(255,255,255)',
    fontSize:30,
    textAlign:'center'

  },
  toc:{
    width:150,
   height:60,
   backgroundColor:'rgb(54,71,231)',
   borderRadius : 10,
   alignItems:'center',
   justifyContent:'center',
   marginTop:20
 }
});

// export default PageApi
