import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Counter from './Counter';

import { Provider } from 'react-redux';
import storeState  from './redux/store';
export default function CobaRedux2() {
    const [nama, setName] = useState('ronaldo');
  return (
    <Provider store={storeState}>
          <Counter/>
    </Provider>
 
  )
}