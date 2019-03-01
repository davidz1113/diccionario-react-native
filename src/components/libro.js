import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Card from './card'
import CardSection from './cardSection';
import Boton from './boton';

const Libro = (props) => {
    const {tituloStyle, authorStyle} = styles;
    console.log(props.libroData);
    return (
        
        <Card>
            <CardSection>
                <Text style={tituloStyle}>{props.libroData.volumeInfo.title}</Text>
                {/* <Text style={tituloStyle}>Hola mundo</Text> */}
                <Text style={authorStyle}>{props.libroData.volumeInfo.authors[0]}</Text>
            </CardSection>
            <CardSection>
                <Boton texto={'ver Más'} />
            </CardSection>
        </Card>
    )
}

const styles = {
    tituloStyle: {
        fontSize: 18,
        alignSelf: 'center'
    },
    authorStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: '#b1b1b1'
    }

};

export default Libro;