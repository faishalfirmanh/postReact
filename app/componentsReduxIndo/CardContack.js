import { View, Text } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

export default function CardContack({nama}) {
  return (
    <View>
      <Text style={{color:'red'}}>CardContack {nama}</Text>
    </View>
  )
}