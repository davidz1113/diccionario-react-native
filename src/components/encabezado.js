import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Encabezado = (props) => {
    const { textStyles, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            {/* <Text style={textStyles}>Menú</Text> */}
            <Icon name="bars" size={30} color="#fff" />
            <Text style={textStyles}>{props.tituloEncabezado}</Text>
            <Text style={textStyles}>Nuevo</Text>
        </View>
    );
}


const styles = {
    viewStyle: {
        
        backgroundColor: '#666',
        justifyContent: 'space-between',
        height: 70,
        shdowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft:6,
        paddingRight:6,
    },
    textStyles: {
        fontSize: 15,
        color: '#fff',
    }
}

export default Encabezado;
