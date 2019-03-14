import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Home from './Home';
import ListaCiudades from './ListaCiudades';
import Perfil from './Perfil';


const RouterComponent = () => {
    return (
        <Router >
            {/* <Stack key="root"> */}
            <Scene key="root" hideNavBar>

                <Scene key="inicio">

                    <Scene
                        key="Home"
                        component={Home}
                        title="Inicio"
                        initial
                    />
                </Scene>
                <Scene key="configuraciones">

                    <Scene
                        key="ListaCiudades"
                        component={ListaCiudades}
                        title="Ciudades"
                        rightTitle="Perfil"
                        onRight={()=>Actions.Perfil()}
                    />
                    <Scene
                        key="Perfil"
                        component={Perfil}
                        title="Perfil"
                    />
                </Scene>
            </Scene>

            {/* </Stack> */}

        </Router>


    );

}

export default RouterComponent;