import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { DescriptionBox } from '../description-box'

import { Variables } from '..'
import styles from './styles'

class Xp extends React.Component {

    render() {
        return (
            <View style={ styles.form }>
                <View style={ styles.formContent }>
                    <View style={ styles.formName }>
                        <Text style={ Variables.label }>Nome da empresa</Text>
                        <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <View style={ styles.formContent }>
                    <View style={ styles.formItem }>
                        <Text style={ Variables.label }>Área</Text>
                        <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                        
                    <View style={ styles.formItem }>
                        <Text style={ Variables.label }>Cargo</Text>
                        <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <View style={ styles.formContent }>
                    <View style={ styles.formItem }>
                        <Text style={ Variables.label }>Data de início</Text>
                        <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                        
                    <View style={ styles.formItem }>
                        <Text style={ Variables.label }>Data de término</Text>
                        <TextInput style={ Variables.input } onChangeText={ text => onChangeText(text) }/>
                    </View>
                </View>

                <Text style={ Variables.label }>Sobre o emprego</Text>
                <DescriptionBox placeholder='Escreva uma breve descrição sobre seu emprego e suas experiências'></DescriptionBox>
            </View>
        )
    }
}

export {Xp}