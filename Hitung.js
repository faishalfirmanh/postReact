/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Hitung extends Component {
  constructor(){
    super()
    this.state ={
      resultText:"",
      hasilKalkulasi:""
    }
      this.dftOperasi = ['del','*','/','+','-','reset']
  }
  hasilOperasi(){
    const teks = this.state.resultText
    console.log(teks, eval(teks))
    this.setState({
      hasilKalkulasi: eval(teks)
      })

  }
  validasi(){
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case "+":
      case '-':
      case '*':
      case '/':
      return false

    }
    return true
  }
  clikBtn(teks){
    if (teks == '=' ) {
      return this.validasi() && this.hasilOperasi()
    }
    this.setState({
      resultText:this.state.resultText+teks
      })
  }
  operation(dftOperasi){
    switch (dftOperasi) {
      case "del":
        let teks = this.state.resultText.split('')
        teks.pop()
        this.setState({
          resultText: teks.join('')
          })
        break
      case "reset":
        let tek = this.state.resultText.splice(0, tek.length)
        
        this.setState({
          resultText: teks.join('')
          })
          break
      case '-':
      case '*':
      case '+':
      case '/':
      const hasil =  this.state.resultText.split('').pop()
      if (this.dftOperasi.indexOf(hasil) >0) return
      if (this.state.teks == "") return
        this.setState({
          resultText: this.state.resultText + dftOperasi
          })

    }

  }

  render() {
    let elm =[]
    for (let i = 0; i < 4; i++) {
      let row = []
      let dftrAngka = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
      for (let j = 0; j <3; j++) {
      row.push(  <TouchableOpacity onPress={()=>this.clikBtn(dftrAngka[i][j])}>
                    <Text style={styles.texBtn}>{dftrAngka[i][j]}</Text>
                 </TouchableOpacity>)
      }
      elm.push(<View style={styles.baris}>{row}</View>)
    }


    let oprKosng = []
    for (let i = 0; i < 6; i++) {
      let baris = []
      oprKosng.push(<TouchableOpacity onPress={()=>this.operation(this.dftOperasi[i])}>
                      <Text style={styles.textBtnOperasi}>{this.dftOperasi[i]}</Text>
                    </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>

        <View style={styles.hasil}>
          <Text style={styles.textHsil}>{this.state.resultText}</Text>
        </View>
        <View style={styles.caclulation}>
          <Text style={styles.textCalc}>{this.state.hasilKalkulasi}</Text>
        </View>
        <View style={styles.button}>
            <View style={styles.bilangan}>
              {elm}
            </View>
            <View style={styles.operasi}>
              {oprKosng}
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texBtn:{
    fontSize:30,
    color:'white'
  },
  textBtnOperasi:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHsil:{
    fontSize:50,
    color: 'white',
  },
  textCalc:{
    fontSize:50,
    color:'white'
  },
  container: {
    flex: 1,
  },
  button:{
    flexGrow:4,
    flexDirection:'row'
  },
  baris:{
    flexDirection:'row',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  hasil:{
    flex:2,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  caclulation:{
    flex:1,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bilangan:{
    flex:3,
    backgroundColor:'rgb(62,190,127)'
  },
  operasi:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'rgb(221,62,62)'
  }
});
