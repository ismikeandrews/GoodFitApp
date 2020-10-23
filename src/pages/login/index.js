import React, {Component} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import { usuarioService, authService } from '../../services'
import { Variables } from '../../shared'
import styles from './styles'

class Login extends Component{

    state = {
        user: '',
        password: '',
    }
    
    async login(){
        const data = {
            user: this.state.user,
            password: this.state.password
        }
        try {
            const loginResponse = await usuarioService.login(data);
            if (loginResponse.data) {
                await authService.saveData(loginResponse.data);
                this.props.navigation.navigate('CadastroCurriculo')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    render(){
        return(
            <View style={ Variables.container }>
                <View style={ styles.logo }>
                    <Image style={ styles.logoImg } source={require('../../assets/images/ijc.png')} />
                </View>

                <Text style={ Variables.title }>Seja bem-vindo!</Text>
                <Text style={ Variables.subtitle }>Faça login para acessar a plataforma</Text>
            
                <Text style={[ Variables.label, styles.label ]}>Login</Text>
                <TextInput style={ Variables.input } autoCapitalize="none" autoCompleteType="username" textContentType="username" onChangeText={ text => this.setState({ user: text.trim() }) }/>
                
                <Text style={[ Variables.label, styles.label ]}>Senha</Text>
                <TextInput style={ Variables.input } secureTextEntry={true} onChangeText={ text => this.setState({ password: text }) }/>
                
                <TouchableOpacity style={ styles.btnLink }
                onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <Text style={ styles.link }>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnEntrar ]}
                onPress={() => this.login()}>
                    <Text style={[ Variables.btnText, styles.btnTextEntrar ]}>Entrar</Text>
                </TouchableOpacity>
                
                <View style={ Variables.contentBtn }>
                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btns, styles.btnCadastro ]}
                    onPress={() => this.props.navigation.navigate('Cadastro')}>
                        <Text style={[ Variables.btnText, styles.btnTextCadastro ]}>Cadastre-se</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btns, styles.btnCodigo ]}
                    onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                        <Text style={[ Variables.btnText, styles.btnTextCodigo ]}>Código de cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }
    
    export { Login }