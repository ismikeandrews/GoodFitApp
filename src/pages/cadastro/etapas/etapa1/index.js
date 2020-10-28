import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import moment from 'moment';
import { Variables, Datepicker } from '../../../../shared';
import styles from './styles';


export default Etapa1 = (props) => {
    const [nomeCandidato, setNomeCandidato] = useState(props.nomeCandidato);
    const [email, setEmail] = useState(props.email);
    const [dateObj, setDateObj] = useState({timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()});
    const [toggleDatepicker, setToggleDatepicker] = useState(false)

    useEffect(() => {
        const date = JSON.parse(props.dataNascimentoCandidato) 
        if (date.timestamp && date.isoString, date.display) {
           setDateObj(date)
        }
    }, [])

    
    sendDataToParent = () => {
        props.parentCallback({nomeCandidato, email, dateObj: JSON.stringify(dateObj)})
    }

    setBirthDay = (chilData) => {
        setDateObj(JSON.parse(chilData))
    }

    handleDateOnBlur = () => {
        setToggleDatepicker(false)
        sendDataToParent()
    }

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Informações pessoais</Text>
            <Text style={ Variables.subtitle }>Precisamos de alguns dados básicos sobre você</Text>

            <View style={ styles.perfil }>
                <Image style={ styles.perfilImg } source={require('../../../../assets/images/ijc.png')} />
            </View>
            <Text style={ Variables.label }>Nome completo</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} textContentType="name" autoFocus={true} autoCompleteType="name" autoCapitalize="words" value={nomeCandidato} onChangeText={ text => setNomeCandidato(text) }/>

            <Text style={ Variables.label }>Email</Text>
            <TextInput style={ Variables.input } onBlur={() => sendDataToParent()} textContentType="emailAddress" autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={ text => setEmail(text.trim()) }/>

            <Text style={ Variables.label }>Data de Nascimento</Text>
            <TextInput style={ Variables.input } onBlur={() =>  handleDateOnBlur()} value={dateObj.display} onFocus={() => setToggleDatepicker(true)}/>
            {toggleDatepicker && (
                <Datepicker
                parentCallback={setBirthDay}/>
            )}
        </View>
    );
};