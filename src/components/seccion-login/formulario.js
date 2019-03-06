import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { Card, CardSection, Boton, Input } from '..';
class Formulario extends Component {
    state = { email: '', password: '' }
    render() {
        return (
                <Card>
                    <CardSection>
                        <Input
                            texto={'Email'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder={'usuario@gmail.com'}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            texto={'Contraseña'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder={'Contraseña'}
                            secureTextEntry={true}
                        />
                    </CardSection>
                    <CardSection>
                        <Boton texto={'Iniciar Sesión'} />
                    </CardSection>
                </Card>

        );
    }
}
export default Formulario;