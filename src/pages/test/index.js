import React from 'react';
import { View, Text } from 'react-native'

import { nivelUsuarioService } from '../../services';

class Test extends React.Component{

    state = {
        nivelUsuarioList: []
    }

    componentDidMount(){
        this.loadNivelUsuario()
    }

    async loadNivelUsuario(){
        const res = await nivelUsuarioService.getNivelUsuarioList();
        this.setState({ nivelUsuarioList: res.data})
    }

    render(){
        return (
            <View>
                {this.state.nivelUsuarioList.map(nu => (
                    <Text key={nu.codNivelUsuario}>
                        {nu.nomeNivelUsuario}
                    </Text>
                ))}
            </View>
        );
    }
}

export { Test }