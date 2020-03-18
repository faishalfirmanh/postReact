import React, { useState } from 'react';

import Navigator from './routes/homeStack';
mport {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


export default function TutorNexNinjaPasBetween() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}
