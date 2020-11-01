import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import { viacepService } from '../../../../services';
import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa3 = forwardRef((props, ref) => {

    const [cepEndereco, setCepEndereco] = useState(props.cepEndereco);
    const [logradouroEndereco, setLogradouroEndereco] = useState(props.logradouroEndereco);
    const [numeroEndereco, setNumeroEndereco] = useState(props.numeroEndereco);
    const [complementoEndereco, setComplementoEndereco] = useState(props.complementoEndereco);
    const [bairroEndereco, setBairroEndereco] = useState(props.bairroEndereco);
    const [zonaEndereco, setZonaEndereco] = useState(props.zonaEndereco);
    const [cidadeEndereco, setCidadeEndereco] = useState(props.cidadeEndereco);
    const [estadoEndereco, setEstadoEndereco] = useState(props.estadoEndereco);

    const locationData = async (cep) => {
        try {
            const locationObj = await viacepService.getLocationData(cep);
            setLogradouroEndereco(locationObj.data.logradouro);
            setBairroEndereco(locationObj.data.bairro)
            setCidadeEndereco(locationObj.data.localidade)
            setEstadoEndereco(locationObj.data.uf);
            sendIfFilled()
        } catch (error) {
            console.log(error)
        }
    }

    const sendIfFilled = () => {
        props.parentCallback({
            cepEndereco, 
            logradouroEndereco, 
            numeroEndereco, 
            complementoEndereco, 
            bairroEndereco, 
            zonaEndereco, 
            cidadeEndereco, 
            estadoEndereco
        });
    }

    return (
        <View style={[ Variables.content, styles.content ]}>
            <Text style={[ Variables.title, styles.title ]}>Endereço</Text>

            <Text style={ Variables.label }>CEP*</Text>
            <TextInput style={ Variables.input } textContentType="postalCode" autoFocus={true} maxLength={8} keyboardType="number-pad" onBlur={() => locationData(cepEndereco)} value={cepEndereco} onChangeText={ text => setCepEndereco(text.trim()) }/>

            <Text style={ Variables.label }>Logradouro*</Text>
            <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} textContentType="fullStreetAddress" value={logradouroEndereco} onChangeText={ text => setLogradouroEndereco(text) }/>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Número*</Text>
                    <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} value={numeroEndereco} onChangeText={ text => setNumeroEndereco(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Complemento</Text>
                    <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} value={complementoEndereco} onChangeText={ text => setComplementoEndereco(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Cidade*</Text>
                    <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} textContentType="addressCity" value={cidadeEndereco} onChangeText={ text => setCidadeEndereco(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Bairro*</Text>
                    <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} value={bairroEndereco} onChangeText={ text => setBairroEndereco(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Estado*</Text>
                    <TextInput style={ Variables.input } onBlur={() => sendIfFilled()} textContentType="addressState" value={estadoEndereco} onChangeText={ text => setEstadoEndereco(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Zona*</Text>
                    <TextInput style={ Variables.input }  onBlur={() => sendIfFilled()} value={zonaEndereco} onChangeText={ text => setZonaEndereco(text) }/>
                </View>
            </View>
        </View>
    );
})