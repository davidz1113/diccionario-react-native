import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import BarraInferior from './lib/Barrainferior';
import Cabecera from './lib/Cabecera';
import Resumen from './lib/Resumen';

const Inicio = () => {
    return (
        <View style={stylesScreen.container}>
            {/* <Text>Hola mundos</Text> */}
            {/* <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}

            <View style={stylesScreen.header}>
                <Cabecera tituloEncabezado="Inicio"></Cabecera>
            </View>
            <View style={stylesScreen.content}>
                <Resumen />
            </View>
            <View style={stylesScreen.footer}>

                <BarraInferior
                    primero="home"
                    segundo="retweet"
                    tercero="list-ul"
                    cuarto="users"
                />
            </View>

        </View>
    );
}

const stylesScreen = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        marginBottom: 20
    },
    content: {
        flex: 9,
    },
    footer: {
        flex: 1.2
    }

}

export default Inicio;