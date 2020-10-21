import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { Variables } from '../../../../shared'
import styles from './styles'

export default function Etapa5(){

    return (
        <View style={ Variables.content }>
            <Text style={[ Variables.title, styles.title ]}>Endereço</Text>

            <Text style={ Variables.label }>CEP</Text>
            <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>

            <Text style={ Variables.label }>Logradouro</Text>
            <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Cidade</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Bairro</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Estado</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Zona</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>

            <View style={ styles.inputGrid }>
                <View style={ styles.input }>
                    <Text style={ Variables.label }>Número</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>

                <View style={ styles.input }>
                    <Text style={ Variables.label }>Complemento</Text>
                    <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                </View>
            </View>
        </View>
    )
}