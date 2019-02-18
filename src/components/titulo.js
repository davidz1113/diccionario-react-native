import React from 'react';
import { Text, View } from 'react-native';

const Titulo = (props) => {
    const { textStyles, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyles}>{props.textoTitulo}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2
    },
    textStyles: {
        fontSize: 30,
        color: '#ff7788',
    }
}

export default Titulo;