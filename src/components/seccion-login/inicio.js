import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Encabezado} from '../imports'

class Inicio extends Component {
    render(){
        return (

            <View>
                <Encabezado tituloEncabezado={'Login App'}></Encabezado>
                <Text>Ey soy el putas para React native</Text>
            </View>
        )
    }
}

export default Inicio;