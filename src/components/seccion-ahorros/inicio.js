import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import  BarraInferior  from './lib/Barrainferior';

const Inicio =()=>{
        return (
            <View>
                {/* <Text>Hola mundos</Text> */}
                <BarraInferior 
                    primero="home" 
                    segundo="retweet" 
                    tercero="list-ul" 
                    cuarto="users" 
                />
            </View>
        );
}

export default Inicio;