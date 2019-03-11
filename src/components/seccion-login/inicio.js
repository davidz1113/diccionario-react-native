import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Encabezado, Boton, Spinner } from '..'
import firebase from '@firebase/app' //forma correcta de importar el firebase
// import * as firebase from 'firebase'; //error con esta forma de importacion

// const firebase = require("firebase");
import Formulario from './formulario'


class Inicio extends Component {

    state = { sesionIniciada: null }

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyBXZ5aowjuOvMuF7ixnNDwNWGyOiajyBS0",
            authDomain: "login-react-a3c48.firebaseapp.com",
            databaseURL: "https://login-react-a3c48.firebaseio.com",
            // projectId: "login-react-a3c48",
            storageBucket: "login-react-a3c48.appspot.com",
            // messagingSenderId: "43948050742"
        });


        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ sesionIniciada: true });
            } else {
                this.setState({ sesionIniciada: false });
            }
        })

    }

    contenidoSegunSesion() {
        let vista = null;
        switch (this.state.sesionIniciada) {
            case true:
                vista =
                    <View style={{ height: 35 }}>
                        <Boton onPress={()=> firebase.auth().signOut()} texto={'cerrar sesión'}>

                        </Boton>
                    </View>;
                break;

            case false:

                vista =
                    <Formulario />;
                break;

            default:
            vista=
                <Spinner size={'large'} />;

                break;
        }

        return vista;

    }

    render() {
        return (

            <View>
                <Encabezado tituloEncabezado={'Login App'}></Encabezado>
                {this.contenidoSegunSesion()}
                {/* <Formulario /> */}
                {/* <Text>Ey soy el putas para React native</Text> */}
            </View>
        )
    }
}

export default Inicio;