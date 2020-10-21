import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa2 = forwardRef((props, ref) =>{
    const [loginUsuario, setLoginUsuario] = useState(props.loginUsuario);
    const [password, setPassword] = useState(props.password);
    const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword);

    useImperativeHandle(ref, () => ({
        sendDataToParent() {
            props.parentCallback({loginUsuario, password, confirmPassword});
        }
    }));

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Informações da Conta</Text>
            <Text style={ Variables.subtitle }>Agora vamos configurar a sua conta</Text>

            <Text style={ Variables.label }>Login</Text>
            <TextInput style={ Variables.input } autoCapitalize="none" textContentType="username" autoFocus={true} autoCompleteType="username" value={loginUsuario} onChangeText={ text => setLoginUsuario(text) }/>

            <Text style={ Variables.label }>Senha</Text>
            <TextInput style={ Variables.input } textContentType="password" autoCapitalize="none" secureTextEntry={true} value={password} onChangeText={ text => setPassword(text) }/>

            <Text style={ Variables.label }>Confirmar senha</Text>
            <TextInput style={ Variables.input } textContentType="password" autoCapitalize="none" secureTextEntry={true} value={confirmPassword} onChangeText={ text => setConfirmPassword(text) }/>
        </View>
    );
});