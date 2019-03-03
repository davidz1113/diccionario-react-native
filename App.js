/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo'
import Encabezado from './src/components/encabezado'
import Display from './src/components/display'
import Card from './src/components/card'
// import Inicio from './src/components/seccion-ahorros/inicio' //seccion vista de ahorros
import Inicio from './src/components/seccion-login/inicio'
import LibroList from './src/components/libroList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      /**
       * Para la seccion de la barra inferior junto con el
       * scroll view ademnas de probar posicion con 
       * flex
       */

      // <View style={styles.container}>
      //   <Inicio></Inicio>
      // </View>


      /**Vista para el ejercicio de las tarjetas y botones */
      // <View>
      //   <Encabezado tituloEncabezado={'Relog mundial'}> </Encabezado>
      //   <Display ciudad={'Pasto'} hora={'12:38 pm'} fecha={'17 de Febrero'}> </Display>
      // </View>


      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Hola mundo COMO ESTAS!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   {/* <Text style={styles.instructions}>{instructions}</Text> */}
      // </View>

      /**
       * Vista para la seccion de libros
       */
      // <View style={{flex:1}}>
      //   <LibroList/>
      // </View>
      
      /**
       * Vista para la seccion del login
       */
      <View style={styles.container}>
        <Inicio></Inicio>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
