/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgb(119,58,237)'}}>
        <HederFungsi name="cobak from Header"/>
      </View>
    );
  }
}

function HederFungsi(props){
  return(
      <Text style={{fontSize:30}}>
        {props.name}
      </Text>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// export default HederFungsi
