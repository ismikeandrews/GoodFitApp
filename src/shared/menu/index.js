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

                <View style={ styles.logo }>
                    <Image style={ styles.logoImg } source={require('../../assets/images/components/logo-branco.png')} />
                </View>

                <View style={ styles.perfil }>
                    <Image style={ styles.perfilImg } source={require('../../assets/images/ijc.png')} />
                </View>
            </View>
        </SafeAreaView>
    )
}