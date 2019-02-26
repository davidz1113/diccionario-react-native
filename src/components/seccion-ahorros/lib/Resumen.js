import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Resumen extends Component {
    render() {
        const { contenedor, 
                itemTexto, 
                itemNumeroAhorros, 
                itemNumeroDeudas, 
                itemNumeroDeseos, 
                itemNumeroTexto, 
                itemContenedor } = styles;
        return (
            <ScrollView>

            <View style={contenedor}>
                <View style={itemContenedor}>
                    <Text style={itemTexto}>Tus Ahorros</Text>
                    <View style={itemNumeroAhorros}>
                        <Icon name="home" size={40} color="#fff" />
                        <Text style={itemNumeroTexto}>$860.00</Text>
                    </View>
                </View>
                <View style={itemContenedor}>
                    <Text style={itemTexto}>Deudas</Text>
                    <View style={itemNumeroDeudas}>
                        <Icon name="home" size={40} color="#fff" />
                        <Text style={itemNumeroTexto}>$320.00</Text>
                    </View>
                </View>
                <View style={itemContenedor}>
                    <Text style={itemTexto}>Lista de deseos</Text>
                    <View style={itemNumeroDeseos}>
                        <Icon name="home" size={40} color="#fff" />
                        <Text style={itemNumeroTexto}>$190.00</Text>
                    </View>
                </View>
            </View>
            </ScrollView>

        );
    }
}

const styles = {
    contenedor: {
        padding: 30,
        justifyContent: 'space-around'
    },
    itemTexto: {
        height: 20,
        fontSize: 14
    },
    itemNumeroAhorros: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#bff8bf',
        backgroundColor: '#2f812f',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroDeudas: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#f8bfbf',
        backgroundColor: '#cd2d2d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroDeseos: {
        height: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: '#f8f6bf',
        backgroundColor: '#ead92d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemNumeroTexto: {
        fontSize: 30,
        color: '#fff'
    },
    itemContenedor: {
        paddingBottom: 50
    }
};

export default Resumen;
