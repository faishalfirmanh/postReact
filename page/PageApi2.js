/* @flow */

import React, { Component } from 'react';
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

export default class PageApi2 extends Component {
  constructor() {
    super();
    this.state = {
      isloading:true,
      dataSource :[],
      judul:'',
      item:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
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

  getFilm2 = async () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respon)=>
      respon.json()
    )
    .then((responseJson)=>{
      this.setState({
        item:responseJson.title,
        item:responseJson.movies[2].title
      })
    })
    .catch((error) => {
      console.error(error);
    });
    console.log("telah diklik");
  }

  rendItem = ({item})=>(
    <TouchableOpacity onPress={()=>alert(item.body)}>
          <Text>{item.title}</Text>
    </TouchableOpacity>
    )

      render() {
        if (this.state.isloading) {
          return(
            <View>
              <Text>
                saat ini loading
              </Text>
              <ActivityIndicator size="large" animating/>
            </View>
            )
        }
        else {
          return(
            <View>
          
                  <FlatList
                  data={this.state.dataSource}
                  renderItem={this.rendItem}
                  keyExtractor={(item, index)=>index}
                  />
              <Text>
              {this.state.judul}
              </Text>
            </View>
          )
            }
          }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
