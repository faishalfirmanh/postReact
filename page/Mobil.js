import * as React from 'react';
import { Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
 } from 'react-native';





function Mobil({navigation}) {
  return (
    <View>

      <Text>
        Mobil

      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('DaftrMotor')} style={styles.toc}>
        <Text style={styles.tekToc}>
              back home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  toc:{
    height:50, width:150,
    backgroundColor:'rgb(60,212,22)',
    borderRadius:10
  },
tekToc:{
    fontSize:27,
    textAlign:'center'
  },
})
export default Mobil;
