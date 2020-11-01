import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { Variables, Datepicker } from '../../../../shared';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

export default Etapa1 = (props) => {
    const [nomeCandidato, setNomeCandidato] = useState(props.nomeCandidato);
    const [email, setEmail] = useState(props.email);
    const [dateObj, setDateObj] = useState({timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()});
    const [toggleDatepicker, setToggleDatepicker] = useState(false)
    const [imagemUsuario, setImagemUsuario] = useState();
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

    const imagePickerCallback = (data) => {
        if (data.didCancel) {
            return;
        }
        if (data.error) {
            Alert.alert('Ocorreu um erro')
        }
        if (!data.uri) {
            Alert.alert('Não foi possivel verificar a imagem')
        }
        setImagemUsuario(data)
    }

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Informações pessoais</Text>
            <Text style={ Variables.subtitle }>Precisamos de alguns dados básicos sobre você</Text>

            <View style={ styles.perfil }>
                <TouchableOpacity onPress={() => ImagePicker.showImagePicker({}, imagePickerCallback)}>
                    <Image style={ styles.perfilImg } source={{uri: imagemUsuario ? imagemUsuario.uri : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}} />
                </TouchableOpacity>
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