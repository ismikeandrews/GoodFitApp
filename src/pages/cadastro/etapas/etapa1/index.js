import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa1 = forwardRef((props, ref) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [nomeCandidato, setNomeCandidato] = useState(props.nomeCandidato);
    const [email, setEmail] = useState(props.email);
    const [dataNascimentoCandidato, setDataNascimentoCandidato] = useState(props.dataNascimentoCandidato);
    const [toggleDatepicker, setToggleDatepicker] = useState(false)

    useImperativeHandle(ref, () => ({
        sendDataToParent() {
            props.parentCallback({nomeCandidato, email, dataNascimentoCandidato})
        }
    }));

    showDatepicker = () => {
        setToggleDatepicker(true)
    }

    checkDate = (event, data) => {
        console.log(event.nativeEvent.timestamp)
    }

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Informações pessoais</Text>
            <Text style={ Variables.subtitle }>Precisamos de alguns dados básicos sobre você</Text>

            <View style={ styles.perfil }>
                <Image style={ styles.perfilImg } source={require('../../../../assets/images/ijc.png')} />
            </View>

            <Text style={ Variables.label }>Nome completo</Text>
            <TextInput style={ Variables.input } textContentType="name" autoFocus={true} autoCompleteType="name" autoCapitalize="words" value={nomeCandidato} onChangeText={ text => setNomeCandidato(text) }/>

            <Text style={ Variables.label }>Email</Text>
            <TextInput style={ Variables.input } textContentType="emailAddress" autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={ text => setEmail(text) }/>

            <Text style={ Variables.label }>Data de Nascimento</Text>
            <TextInput style={ Variables.input } value={dataNascimentoCandidato} onFocus={() => showDatepicker()} onChangeText={ text => setDataNascimentoCandidato(text) }/>
            {toggleDatepicker && (
                <DateTimePicker
                mode="date"
                value={date}
                display="default"
                onChange={(event, data) => checkDate(event, data)}/>
            )}
        </View>
    );
});