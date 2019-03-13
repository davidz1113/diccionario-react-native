import React, { Component } from 'react';
import { CardSection } from '..'
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from './actions';

class ItemLista extends Component {

    mostrarDescripcion(){
        const {expandir, frutaInfo} = this.props;
        console.log(expandir);
        if(expandir){
            return(
                <Text>{frutaInfo.descripcion}</Text>
            );
        }
    }

    render() {
        const { nombreStyle } = styles;
        const { id, nombre } = this.props.frutaInfo;
        // console.log(this.props);

        return (
            <TouchableWithoutFeedback onPress={() => this.props.seleccionarFruta(id)}>
                <View>
                    <CardSection>
                        <Text style={nombreStyle}>
                            {nombre}
                        </Text>
                    </CardSection>
                    {this.mostrarDescripcion()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nombreStyle: {
        fontSize: 20,
        paddingLeft: 5
    }
};

const mapStateToProps = (state, ownProps) => {
    const expandir = state.idFrutaSeleccionada === ownProps.frutaInfo.id;
    console.log('aqui');
    return { expandir };
};


export default connect(mapStateToProps, actions)(ItemLista);