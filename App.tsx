import React, { Fragment } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';

import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
      <Home />
    </>
    /*
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
    */
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
*/
