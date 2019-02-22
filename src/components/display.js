import React from 'react';
import { Text, View } from 'react-native';
import Card from './card'


const Display = (props) => {
    const {
        contenedorExterior,
        contenedorCiudad,
        contenedorHoraFecha,
        ciudadTexto,
        horaTexto,
        fechaTexto
    } = style;
    return (
        <View style={contenedorExterior}>
            <View style={contenedorCiudad}>
                <Text style={ciudadTexto}>{props.ciudad}</Text>
            </View>
            <View style={contenedorHoraFecha}>
                <Text style={horaTexto}>{props.hora}</Text>
            </View>
            <View style={contenedorHoraFecha}>
                <Text style={fechaTexto}>{props.fecha}</Text>
            </View>
            <Card>

                <Text> Hola andres david como estas</Text>

            </Card>
        </View>
    )
}

const style = {
    contenedorExterior: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorCiudad: {
        alignItems: 'flex-start'
    },
    contenedorHoraFecha: {
        alignItems: 'center'
    },
    ciudadTexto: {
        fontSize: 13
    },
    horaTexto: {
        fontSize: 50
    },
    fechaTexto: {
        fontSize: 30
    }


}

export default Display;

