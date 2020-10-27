import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa2 = (props) => {
    const [loginUsuario, setLoginUsuario] = useState(props.loginUsuario);
    const [password, setPassword] = useState(props.password);
    const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword);
    const [cpfCandidato, setCpfCandidato] = useState(props.cpfCandidato);

    sendDataToParent = () => {
        props.parentCallback({loginUsuario, password, confirmPassword, cpfCandidato});
    }


    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Informações da Conta</Text>
            <Text style={ Variables.subtitle }>Agora vamos configurar a sua conta</Text>

            <Text style={ Variables.label }>Login</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} autoCapitalize="none" textContentType="username" autoFocus={true} autoCompleteType="username" value={loginUsuario} onChangeText={ text => setLoginUsuario(text.trim()) }/>

            <Text style={ Variables.label }>CPF</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} maxLength={11} keyboardType="number-pad" autoCapitalize="none" textContentType="none"  autoCompleteType="username" value={cpfCandidato} onChangeText={ text => setCpfCandidato(text.trim()) }/>

            <Text style={ Variables.label }>Senha</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} textContentType="password" autoCapitalize="none" secureTextEntry={true} value={password} onChangeText={ text => setPassword(text.trim()) }/>

            <Text style={ Variables.label }>Confirmar senha</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} textContentType="password" autoCapitalize="none" secureTextEntry={true} value={confirmPassword} onChangeText={ text => setConfirmPassword(text.trim()) }/>
        </View>
    );
};