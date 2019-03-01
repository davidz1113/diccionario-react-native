import React, { Component } from 'react';
import { Text, ScrollView } from "react-native";
import request from 'superagent';
import Libro from './libro'

class LibroList extends Component {

    /**
     * Definicion del objeto state, se debe hacer de esta manera,
     * como atributo de la clase, de esta manera permite guardar de manera
     * global el estado de los objetos que queramos renderizar luego.
     */
    state = {
        libros: []
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
                this.setState({ libros: res.body.items });
            })
    }

    render() {
        // console.log(this.state.libros);
        return (
            <ScrollView>
                {/* <Text>Hola mundo</Text> */}
                {this.mostrarLibros()}
            </ScrollView>
        );
    }

    mostrarLibros() {
        return this.state.libros.map(
            libro => <Libro key={libro.id} libroData={libro} />
        );
    }
}

export default LibroList;