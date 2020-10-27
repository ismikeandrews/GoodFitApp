import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import { MenuSvg, Etapa1TextoSvg  } from '../../assets'

export default function Menu(props){
    return (
        <SafeAreaView style={ styles.content }>
            <View style={ styles.menu }>
                <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}>
                    <MenuSvg style={ styles.btn }/>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.logo } onPress={() => props.navigation.navigate('Vagas')}>
                    <Image style={ styles.logoImg } source={require('../../assets/images/components/logo-branco.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={ styles.perfil } onPress={() => props.navigation.navigate('Perfil')}>
                    <Image style={ styles.perfilImg } source={require('../../assets/images/ijc.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}