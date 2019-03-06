import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Encabezado } from '..'
import firebase from '@firebase/app'
// import * as firebase from 'firebase'; //error con esta forma de importacion

// const firebase = require("firebase");
import Formulario from './formulario'


class Inicio extends Component {

    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBXZ5aowjuOvMuF7ixnNDwNWGyOiajyBS0",
            authDomain: "login-react-a3c48.firebaseapp.com",
            databaseURL: "https://login-react-a3c48.firebaseio.com",
            // projectId: "login-react-a3c48",
            storageBucket: "login-react-a3c48.appspot.com",
            // messagingSenderId: "43948050742"
        };
        
        const firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (

            <View>
                <Encabezado tituloEncabezado={'Login App'}></Encabezado>
                <Formulario />
                {/* <Text>Ey soy el putas para React native</Text> */}
            </View>
        )
    }
}

export default Inicio;