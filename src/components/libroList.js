import React, { Component } from 'react';
import { Text } from "react-native";
import request from 'superagent';


class LibroList extends Component {

    /**
     * Definicion del objeto state, se debe hacer de esta manera,
     * como atributo de la clase, de esta manera permite guardar de manera
     * global el estado de los objetos que queramos renderizar luego.
     */
    state = {
        libros: {

        }
    }


    /**
     * Este metodo se llamara antes de que se renderice toda la app
     * util para hacer invocaciones a las APIS que traen información
     */
    componentWillMount() {
        request.get('https://www.googleapis.com/books/v1/volumes')
            .query({
                q: 'stranger+inauthor:williams',
                key: 'AIzaSyBC9v22ZtL-NfAFr1HSqvMPaawZFbJNJbY'
            })
            .end((err, res) => {
                this.setState({ libros: res.body });
            })
    }

    render() {
        console.log(this.state);
        return (
            <Text>Ejemplo</Text>
        );
    }
}

export default LibroList;