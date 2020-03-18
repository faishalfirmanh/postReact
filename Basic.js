/* @flow */

// import React, { Component } from 'react';
import React, {Component} from 'react'; //hooks
import Header from './aset/Header';
import Header2 from './aset/Header2';
import List from './aset/List';
import { Icon } from 'react-native-elements'




import {
  View, //importing librart in here
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  ImageBackground
} from 'react-native';

function MMMM(){

  //INI DIDALAM RENDER
  // <Text>{ this.state.count !== 0 ? this.state.count: null}</Text>
  // <Image
  //  style={{width: 50, height: 50}}
  // source={gambar}/>
  // <TouchableOpacity
  // onPress={this.tambah}
  // style={styles.customOp}>
  //   <Text>
  //     Tekan
  //   </Text>
  // </TouchableOpacity>
  //
  // <TextInput
  // style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:100 }}
  // value={this.state.text}/>
  //  <CobakBrow name="HHHHH"/>
    // <ImageBackground source={require('./guin.jpg')} style={{width: '100%', height: '100%'}}>
    //   <Text>Inside</Text>
    // </ImageBackground>
}
function PPPP(){
  // <View style={styles.container}>
  // <Header/>
  //   <View style={styles.Tam1}>
  //     <Text>satu</Text>
  //   </View>
  //   <View style={styles.Tam2}>
  //
  //     <View style={styles.tam21}>
  //       <Text>dua satu</Text>
  //     </View>
  //     <View style={styles.tam22}>
  //       <Text>dua dua</Text>
  //     </View>
  //   </View>
  //   <Text>masukkan nama</Text>
  //   <TextInput
  //     defaultValue={this.state.username}
  //     onChangeText = {text =>this.setState({username:text})}
  //      placeholder="Type here to translate!"
  //    />
  //    <Text>masukkan password</Text>
  //    <TextInput
  //    defaultValue={this.state.pass}
  //    onChangeText = {text =>this.setState({pass:text})}
  //       style={{height: 40}}
  //       placeholder="Input password in here"
  //     />
  //     <Button
  //     title={"Klik me"}
  //     onPress={this.buttnPrased}
  //     />
  // </View>
}

  function CobakBrow(props){
        return(
          <Text>
          INI DARI PROPS COMPONEN  {props.name}
          </Text>
        )
    }
  class  Waktu extends Component{
    constructor(props) {
        super(props)
        this.state ={
          klik:""
        }

    }

    componentDidMount(){
      this.addInterval=setInterval(()=>
      this.increase(), 3000);
    }

    componentWillUnmount(){
      // clearInterval{addInterval}
    }
  }

const Basic =()=>{
  const daftr = [
    {
      id:'1',
      nama: 'supra',
      cc:125,
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
    {
      id: '4',
      nama: 'Gl max',
      cc:150
    },
    {
      id: '5',
      nama: 'mage-pro',
      cc:150
    },
    {
      id: '6',
      nama: 'Bisson',
      cc:250
    },
    {
      id: '7',
      nama: 'klx',
      cc:150
    },
    {
      id: '8',
      nama: 'grenn',
      cc:80
    }
  ];

  return(
    <View>
      <Header2 name="sdfsd"/>
      <FlatList
        data={daftr}
        renderItem={({item}) =>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
              <Text>{item.nama}</Text>
              <Icon
              raised
              name='heartbeat'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} />
          </View>
        </TouchableOpacity>
       }/>


    </View>
    )
}

class Basick extends Component {
constructor(props) {
  super(props);
  this.state = {
    count:0,
    text:'',
    value:'edit disini',

  };
  // this.handChangeText = this.handChangeText.bind(this)
  this.buttnPrased = this.buttnPrased.bind(this)

}
tambah =()=>{
  this.setState({
    count: this.state.count+1,
    text: 'safasfsaf',
    value:""
  })

}
buttnPrased(){
    // const username = this._username._lastNativeText
    // const pass = this._pasword._lastNativeText
    // console.log(username, pass)
    console.log(this.state.username, this.state.pass)
}
handChangeText(newTeks){
  this.setState =({
    value: newTeks
    })
}
  render() {
    const gambar = {
      uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Kadal_Kebun_%28Mabouya_multifasciata%29.jpg/255px-Kadal_Kebun_%28Mabouya_multifasciata%29.jpg"
    }
    return (

      <View style={styles.pek}>
        <Text style={styles.font}>
        kkkdddd
        </Text>
        <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width:100, height:100, borderRadius:100/2}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  font:{
    fontSize:20,
    backgroundColor:'rgb(217,242,15)',
  },
  imageView:{
    height: 80 ,
    width:80,
    borderRadius : 7,
    resizeMode:'contain'
  },
  customOp:{
    width:100,
    height:50,
    backgroundColor:'rgb(241,226,23)',
    borderRadius:17
  },
  Tam1:{
    flex:1,
    backgroundColor:'rgb(160,237,19)',

  },
  tam21:{
    flex:1,
    backgroundColor:'rgb(195,111,166)'
  },
  tam22:{
    flex:1,
    backgroundColor:'rgb(38,52,85)'
  },
  Tam2:{
    flex:1,
    flexDirection:'row-reverse',
    backgroundColor:'rgb(241,30,30)',
  },
  pek:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  listItem:{
    backgroundColor:"rgb(232,223,104)",
    padding:15,
    borderBottomWidth:1,
    borderColor:'rgb(32,8,10)'
  },

  listItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  }

});

export default Basic
