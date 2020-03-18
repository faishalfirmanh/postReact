mport React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{ navigation.getParam('title') }</Text>
      <Text>{ navigation.getParam('body') }</Text>
      <Text>{ navigation.getParam('rating') }</Text>
    </View>
  );
}
