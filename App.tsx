import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";

export default function App() {
  const [tela, setTela] = useState('menu');
  switch (tela){
    case 'menu':
      return getTelaMenu();
  }
  function  getTelaMenu(){
    return (
        <View style={styles.container}>
          <Text>meunu</Text>
          <StatusBar style="auto" />
        </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
