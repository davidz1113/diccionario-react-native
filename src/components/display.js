import React from 'react';
import { Text, View, Button } from 'react-native';
import Card from './card'
import CardSection from './cardSection';


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
        <View >
            <View style={contenedorExterior} >
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
                    <CardSection>
                        <Text>Probando un componente Card</Text>
                    </CardSection>
                    <CardSection >
                        <Text>Esta es otra sección</Text>
                    </CardSection>
                    <View style={{
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>

                        <CardSection>
                            <Text>y esta otra más!</Text>
                        </CardSection>
                    </View>
                    <View style={{
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <CardSection>

                            <Button

                                onPress={() => { console.log('presed') }}
                                title="Aceptar"
                                color="#ff9503"

                            />
                        </CardSection>
                    </View>

                </Card>
            </View>

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

