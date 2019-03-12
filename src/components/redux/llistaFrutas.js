import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView, View } from 'react-native';
import ItemLista from './itemLista';


class ListaFrutas extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.frutas);
    }

    mostrarFila(fruta) {
        // console.log(fruta);
        return <ItemLista frutaInfo={fruta} />;
    }

    render() {
        // console.log(this.props); lista las frutas que estan en el props
        return (
            <View>

                <Text>Listado de frutas</Text>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.mostrarFila} >

                </ListView>
            </View>

        );
    }

}

const mapStateToProps = state => {
    return { frutas: state.frutas };
}

export default connect(mapStateToProps)(ListaFrutas);