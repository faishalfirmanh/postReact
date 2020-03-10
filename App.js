/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Header from './aset/Header';
import Footer from './aset/Footer'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  InputText,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {

  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <View>
//       <Header/>
//         <Text>
//           HALLO WORD
//         </Text>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.teks}>
//             klik go
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.stelFooter}>
//           <Footer/>
//       </View>
//     </>
//   );
// };
function Cobakbrow(){

}
const comText = ()=>{

}

export default class Coba extends Component{ //this is component

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  onPress = () => {
    this.setState({
      count: this.state.count+1
    })

  }
   render(){
     return(
       <View>
       <Header/>
         <TouchableOpacity style={styles.btn}
         onPress={this.onPress}
         >
           <Text style={styles.teks}>
             klik
           </Text>
         </TouchableOpacity>
            <Text style={{fontSize:20}}>
              { this.state.count !== 0 ? this.state.count: null}
            </Text>


        </View>

       );
   }
}


const styles = StyleSheet.create({
  btn:{
    backgroundColor:'rgb(145,193,25)',
    borderRadius:10,
    width:100,
    height:50
  },
  teks:{
    fontSize:30
  },
  stelFooter:{
    flex: 1,
   flexDirection: 'column',
   justifyContent: 'flex-end',
  }
});

 // export default App;
