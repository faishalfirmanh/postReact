/* @flow */

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TextInput

} from 'react-native';

export default class TutorSteve extends React.Component {

  constructor(props){
       super(props); //initial state
       this.state={
           myval: 'abc123'
       }
       console.log('constructor');
   }
   //getDerivedStateFromProps(props, state)
   componentDidMount(){
       console.log('did mount');
       //on initial load
       //geolocation
       //fetch API
       //this.setState() - be cautious about setState here
   }
   changeSomething = (ev)=>{
       console.log('changesomething');  //update state here
       this.setState({
           val: Date.now()
       })
   }
   shouldComponentUpdate(props, state){
       console.log('should update');
       return true;
   }
   componentDidUpdate(){
       console.log('did update');
       //on future loads
       //  watch out loops
       //this.setState() - be cautious about setState here
   }


  render() {
      console.log("render")
    return (

    /* <View style={styles.container}>
        <Text style={styles.firstTxt}>Open up App.js to start working on your app!</Text>
        <Text style={ {fontSize: 20} }>Whatever text we want.</Text>
        <Image style={ {width: 120, height: 120} }
                source={require('./aset/Gambar/liga.jpg')} />
        <Image style={ {width: 100, height: 100} }
                source={ {uri: 'https://picsum.photos/300/100'} } />
        <Button title="click me"
                color="cornflowerblue"
                onPress={this.pressed} />
      </View> */
      <View style={styles.container}>
               <Text style={styles.input}>LifeCycle Methods</Text>
               <Button title="Change Something"
                   onPress={this.changeSomething}/>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontFamily:'FascinateInline-Regular',
    fontSize:30
  },
  con2:{
    flex: 1,
       backgroundColor: '#333',
       alignItems: 'stretch',
       justifyContent: 'flex-start',
       padding: 20
  },
    firstTxt: {
        fontSize: 36
    },
    big: {
       fontSize: 48
   }
});
