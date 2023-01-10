import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";

export default function App() {
  const [tela, setTela] = useState('menu');
  switch (tela){
    case 'menu':
      return getTelaMenu();
    case 'Jogo':
      return getTelaJogo();
    case 'assitirPatida':
      return getTelaJogoAss();
    case 'ganhador':
      return getTelaGanhador();
  }
  function  getTelaMenu(){
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.titulo}>Jogo da Velha</Text>
        </View>
    );
  }
  function  getTelaJogo(){
    return (
        <View style={styles.container}>
          <Text>meunu</Text>
          <StatusBar style="auto" />
        </View>
    );
  }
  function  getTelaJogoAss(){
    return (
        <View style={styles.container}>
          <Text>meunu</Text>
          <StatusBar style="auto" />
        </View>
    );
  }
  function  getTelaGanhador(){
    return (
        <View style={styles.container}>
          <Text>meunu</Text>
          <StatusBar style="auto" />
        </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight: "bold",
    color: '#333'
  }
});
