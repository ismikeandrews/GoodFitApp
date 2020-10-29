import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { IconBox, Help } from '../../shared';
import { CloseButtonSvg } from '../../assets';
import styles from './styles';

class ProcessosVaga extends Component{
    render(){
        return(
            <SafeAreaView style={ styles.container }>
                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.logo }>
                        <Image style={ styles.logoImg } source={require('../../assets/images/empresas/empresa-colegio.jpg')} />
                    </View>
                    <Text style={[ styles.text, styles.nome ]}>Colégio Evoluir</Text>

                    <Text style={[ styles.text, styles.cargo ]}>Professor</Text>

                    <View style={ styles.item }>
                        <Image style={ styles.icon } source={require('../../assets/images/icons/empresa.png')} />
                        <Text style={[ styles.text, styles.endereco ]}>Avenida Lins de Vasconcelos, 1222</Text>
                    </View>

                    <View style={ styles.item }>
                        <Image style={ styles.icon } source={require('../../assets/images/ijc.png')} />
                        <Text style={[ styles.text, styles.horario ]}>Tempo integral</Text>
                    </View>

                    <Text style={[ styles.text, styles.title ]}>Requisitos</Text>
                    <View style={ styles.requisitos }>
                        <View style={ styles.list }>
                            <IconBox name='Comunicação' tipo="habilidade" img='comunicativo'></IconBox>
                            <IconBox name='Organização' tipo="habilidade" img='organizacao'></IconBox>
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

                    <TouchableOpacity style={ styles.btn }
                    onPress={() => console.log('clicked')}>
                        <Text style={ styles.btnText }>Cancelar candidatura</Text>
                        <CloseButtonSvg style={[ styles.icon, styles.iconX ]} color="#9d1d64"/>
                    </TouchableOpacity>
                </ScrollView>
                <Help/>
            </SafeAreaView>
        );
    };
}

export { ProcessosVaga };