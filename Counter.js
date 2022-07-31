import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { tambahCounter, kurangCounter } from './redux/action';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(data=>data.counter)
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity style={{backgroundColor:'red',paddingBottom:5, paddingTop:5,paddingRight:20,paddingLeft:20}}
        onPress={()=>dispatch(kurangCounter(counter))}
        >
            <Text style={{fontSize:20}}>-</Text>
        </TouchableOpacity>
      <Text style={{fontSize:30}}>{counter}</Text>
      <TouchableOpacity 
       onPress={()=>dispatch(tambahCounter(counter))}
      style={{backgroundColor:'blue',paddingBottom:5, paddingTop:5,paddingRight:20,paddingLeft:20}}>
            <Text style={{fontSize:20,color:'white'}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}