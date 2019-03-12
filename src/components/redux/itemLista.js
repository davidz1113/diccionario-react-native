import React, { Component } from 'react';
import { CardSection } from '..'
import { connect } from 'react-redux';
import { Text } from 'react-native';
import * as actions from './actions';

class ItemLista extends Component {
    render() {
        const { nombreStyle } = styles;
        console.log(this.props);
        return (
            <CardSection>
                <Text style={nombreStyle}>
                    {this.props.frutaInfo.nombre}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    nombreStyle: {
        fontSize: 20,
        paddingLeft: 5
    }
}


export default connect(null, actions)(ItemLista);