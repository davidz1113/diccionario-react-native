import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Encabezado } from '..'
import ListaFrutas from './llistaFrutas';

const AppRedux = () => {

    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Encabezado tituloEncabezado={"Frutas"} />
                <ListaFrutas />
            </View>
        </Provider>
    );
}


export default AppRedux;