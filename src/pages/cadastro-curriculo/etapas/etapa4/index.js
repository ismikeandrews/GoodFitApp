import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Checkbox } from '../../../../shared'

import { Variables } from '../../../../shared'
import styles from './styles'

class Etapa4 extends React.Component {
    
    render() {
          return (
            <View style={ styles.content }>
                <Text style={ Variables.title }>Habilidades</Text>
                <Text style={ Variables.subtitle }>Eu sou bom com...</Text>

                <View style={ styles.container }>
                    <Checkbox name="Artes"></Checkbox>
                    <Checkbox name="Contas"></Checkbox>
                    <Checkbox name="Crianças"></Checkbox>
                    <Checkbox name="Códigos"></Checkbox>
                </View>
            </View>
        )
    }  
}

export {Etapa4}