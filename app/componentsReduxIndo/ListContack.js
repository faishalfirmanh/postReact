import { View, Text } from 'react-native'
import React from 'react'
import CardContack from './CardContack'

export default function ListContack({nama}) {
  return (
    <View>
      <Text>ListContack</Text>
      <CardContack nama={nama}/>
    </View>
  )
}