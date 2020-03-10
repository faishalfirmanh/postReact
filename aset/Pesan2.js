/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Pesan2 extends Component {
  render() {
    const {namaHero, type} = this.props
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>{namaHero} jenis {type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
