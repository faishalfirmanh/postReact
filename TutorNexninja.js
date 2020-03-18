/* @flow */

import React, { Component, useState  } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
// style={styles.container} in property tag it's a prop
//{} = obj
//  const [nama, setNama] = useState('ISAL')
//   const [key, setkey ] = useState(20)
// <Text>masukkan nama</Text>
//       <TextInput
//       multiline
//       style={styles.input}
//       onChangeText={(val)=>setNama(val)}/>
//       <Text>{nama}</Text>
//       <Text>masukkan usia</Text>
//       <TextInput
//       keyboardType='numeric'
//       style={styles.input}
//       onChangeText={(val)=>setkey(val)}/>
//       <Text>{key}</Text> //1
//
const TutorNexninja = ()=>{
  const [poeope,setPeople] = useState([
    {name:"boker",id:'1'},
    {name:"yadi",id:'2'},
    {name:"indah",id:'3'},
    {name:"dwi",id:'4'},
    {name:"anggun",id:'5'},
    {name:"angens",id:'6'},
    {name:"james",id:'7'},
    {name:"artur",id:'8'},
    {name:"miles",id:'9'},
    {name:"justin",id:'10'},
    {name:"cino",id:'11'},
  ])

  const pressHandler = (id)=>{
  // alert(id)
  setPeople((prep)=>{
    return prep.filter(orng=>orng.id !=id)
  })
  }
  return(
    <View style={styles.container}>

    { /*<ScrollView>
      {poeope.map((cc)=>{
        return(
          <View key={cc.key}>
            <Text style={styles.item}>{cc.name}</Text>
          </View>
        )
      })}
      </ScrollView>*/}

      <FlatList
       numColumns={2}
       keyExtractor={(item) => item.id}
       data={poeope}
       renderItem={({ item }) => (
         <TouchableOpacity
         onPress={()=>pressHandler(item.id)}>
         <Text style={styles.item}>{item.name}</Text>
         </TouchableOpacity>
       )}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20
  },
  input: {
     borderWidth: 5,
     borderColor: 'rgb(80,201,70)',
     padding: 8,
     margin: 10,
     width: 200,
   },
   item:{
     marginTop:24,
     padding:30,
     backgroundColor:'rgb(55,219,204)',
     fontSize:24,
     marginTop:2,
     marginRight:2
   }

});
 export default TutorNexninja
