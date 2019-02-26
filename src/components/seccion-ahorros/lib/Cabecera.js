import React from 'react';
import { View, Text } from 'react-native';



const Cabecera = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.tituloEncabezado}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingTop: 0,
        backgroundColor: '#e1e1e1',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 6,
        paddingRight: 6
    },
    textStyle:{
        color: '#000',
        fontSize: 10
    }
}

export default Cabecera;