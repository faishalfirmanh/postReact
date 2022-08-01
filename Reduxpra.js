import { View, Text } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
const redux = require('redux');

const initilaState = { //state default 
    value: 2,
    name: 'ronaldo',
    age: 37
}

//2. reducer kumpulan fungsi untuk update state
const routeReducer = (state = initilaState,action)=>{
    switch(action.type){ //2
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age+1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value+ action.newValue
            }
        default:
            return state;
    }
}

//1. store wadah unutk menyimpan global state
const createStore = redux.createStore;
const store = createStore(routeReducer);
console.log('initail store awal--',store.getState());
//

//4. subscriptions = setiap kali terjadi perubahan pada store 
//kalau tidak ada perubahan tidak akan muncul
store.subscribe(()=>{
    console.log('store berubah: ', store.getState());
})


//3. dispatch action update state = manggil fungsi di reducer yang akan dijalankan,
store.dispatch({type: 'ADD_AGE'}) //type : biasahkan dengan kapital nama action
store.dispatch({type: 'CHANGE_VALUE',newValue: 11})




console.log(store.getState());

export default function Reduxpra() { //Konsep Redux
  return (
    <View>
      <Text>Reduxpra</Text>
    </View>
  )
}