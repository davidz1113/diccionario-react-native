import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Card from './card'
import CardSection from './cardSection';
import Boton from './boton';

const Libro = () => {
    return (
        <Card>
            <CardSection>
                <Text>Primer libro</Text>
            </CardSection>
            <CardSection>
               <Boton texto={'ver Más'}/>
            </CardSection>
        </Card>
    )
}

export default Libro;