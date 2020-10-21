import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { IconBox } from '../../../../shared'

import styles from './styles'


class Vaga extends Component{
    render(){
        return(
            <SafeAreaView style={ styles.container }>
                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.logo }>
                        <Image style={ styles.logoImg } source={require('../../../../assets/images/ijc.png')} />
                    </View>
                    
                    <View style={ styles.buttons }>
                        <TouchableOpacity style={ styles.btn }
                        onPress={() => console.log('clicked')}>
                            <Image style={[ styles.icon, styles.iconX ]} source={require('../../../../assets/images/ijc.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.content }>
                        <Text style={[ styles.text, styles.cargo ]}>Assistente</Text>

                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={[ styles.text, styles.nome ]}>Instituto Jô Clemente</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={[ styles.text, styles.endereco ]}>Avenida Lins de Vasconcelos, 1222</Text>
                        </View>

                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={[ styles.text, styles.horario ]}>Tempo integral</Text>
                        </View>

                        <Text style={[ styles.text, styles.title ]}>Requisitos</Text>
                        <View style={ styles.requisitos }>
                            <View style={ styles.list }>
                                <IconBox name='Comunicação' img='ijc.png'></IconBox>
                                <IconBox name='Organização' img='ijc.png'></IconBox>
                            </View>
                        </View>

                        <Text style={[ styles.text, styles.title ]}>Benefícios</Text>
                        <View style={ styles.beneficios }>
                            <View style={ styles.item }>
                                <Text style={[ styles.text, styles.beneficio ]}>Vale Refeição</Text>
                            </View>
                            <View style={ styles.item }>
                                <Text style={[ styles.text, styles.beneficio ]}>Vale Transporte</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export { Vaga }