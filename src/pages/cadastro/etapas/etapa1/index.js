import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { Variables } from '../../../../shared';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Etapa1 = forwardRef((props, ref) => {
    const [nomeCandidato, setNomeCandidato] = useState(props.nomeCandidato);
    const [email, setEmail] = useState(props.email);
    const [dateObj, setDateObj] = useState({timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()});
    const [toggleDatepicker, setToggleDatepicker] = useState(false)

    useEffect(() => {
        if (props.dataNascimentoCandidato.timestamp && props.dataNascimentoCandidato.display && props.dataNascimentoCandidato.isoString) {
           setDateObj(props.dataNascimentoCandidato)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        sendDataToParent() {
            props.parentCallback({nomeCandidato, email, dateObj})
        }
    }));

    initiateDateState = () => {
    }

    showDatepicker = () => {
        setToggleDatepicker(true)
    }

    setBirthDay = (event, data) => {
        let parseUnix = moment(data).unix()
        let parseDisplay = moment(data).format("DD/MM/YYYY");
        setDateObj({timestamp: parseUnix, isoString: data, display: parseDisplay})
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
            <TextInput style={ Variables.input } textContentType="emailAddress" autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={ text => setEmail(text.trim()) }/>

            <Text style={ Variables.label }>Data de Nascimento</Text>
            <TextInput style={ Variables.input } value={dateObj.display} onFocus={() => showDatepicker()} />
            {toggleDatepicker && (
                <DateTimePicker
                mode="date"
                value={dateObj.isoString}
                display="default"
                onChange={(event, data) => setBirthDay(event, data)}/>
            )}
        </View>
    );
});