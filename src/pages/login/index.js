import React, { useState, useContext} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../config/authContext';
import { usuarioService, authService } from '../../services';
import { Variables } from '../../shared';
import styles from './styles';

export default Login = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);
    
    const login = async () => {
        const data = {
            user: user,
            password: password
        };
        try {
            const loginResponse = await usuarioService.login(data);
            if (loginResponse.data) {
                await authService.saveData(loginResponse.data);
                signIn(loginResponse.data.token)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={ Variables.container }>
            <View style={ styles.logo }>
                <Image style={ styles.logoImg } source={require('../../assets/images/ijc.png')} />
            </View>

            <Text style={ Variables.title }>Seja bem-vindo!</Text>
            <Text style={ Variables.subtitle }>Faça login para acessar a plataforma</Text>
        
            <Text style={[ Variables.label, styles.label ]}>Login</Text>
            <TextInput style={ Variables.input } autoCapitalize="none" autoCompleteType="username" textContentType="username" onChangeText={ text => setUser(text.trim()) }/>
            
            <Text style={[ Variables.label, styles.label ]}>Senha</Text>
            <TextInput style={ Variables.input } secureTextEntry={true} onChangeText={ text => setPassword(text) }/>
            
            <TouchableOpacity style={ styles.btnLink }
            onPress={() => navigation.push('Cadastro')}>
                <Text style={ styles.link }>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnEntrar ]}
            onPress={() => login()}>
                <Text style={[ Variables.btnText, styles.btnTextEntrar ]}>Entrar</Text>
            </TouchableOpacity>
            
            <View style={ Variables.contentBtn }>
                <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btns, styles.btnCadastro ]}
                onPress={() => navigation.push('Cadastro')}>
                    <Text style={[ Variables.btnText, styles.btnTextCadastro ]}>Cadastre-se</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btns, styles.btnCodigo ]}
                onPress={() => navigation.push('Vagas')}>
                    <Text style={[ Variables.btnText, styles.btnTextCodigo ]}>Código de cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
};