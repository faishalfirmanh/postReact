/* @flow */

import React, { Component } from 'react';
import Pesan from './aset/Pesan'
import Pesan2 from './aset/Pesan2'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Konsep extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Pesan2 namaHero="Alucard" type="fighter"/>
      <Pesan/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
