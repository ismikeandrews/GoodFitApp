import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Variables } from '../../shared';
import styles from './styles';
import { CurriculoSvg } from '../../assets'

export default function EmptyCv(props){
    return (
        <View style={ styles.content }>
            <CurriculoSvg style={ styles.icon } />
            <Text style={ styles.text }>
                Para continuar cadastre um currículo
            </Text>
            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
            onPress={() => props.navigation.navigate('CadastroCurriculo')}>
                <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar do curriculo</Text>
            </TouchableOpacity>
        </View>
    )
}