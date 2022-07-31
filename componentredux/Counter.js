import { View, Text } from 'react-native'
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <View>
       <Button title="Press here for counter" onPress={() => setCount(count + 1)}/>
    </View>
  )
}