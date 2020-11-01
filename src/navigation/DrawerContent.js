import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import drawerStyle from './drawerStyle'
import { MenuVagasSvg, CurriculoSvg, MenuPerfilSvg, MenuCandidaturaSvg, CloseButtonSvg, MenuSairSvg } from '../assets';
import { AuthContext } from '../config/authContext';
import { authService } from '../services'

export function DrawerContent(props){
    const isDrawerOpen = useIsDrawerOpen();
    const { signOut } = useContext(AuthContext);

    const handleSignOut = async () => {
        props.navigation.toggleDrawer()
        await authService.clearData();
        signOut();
    };

    return(
        isDrawerOpen &&
        <View style={ drawerStyle.sideBar }>
            <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}>
                <CloseButtonSvg style={ drawerStyle.btn } color='#fff'/>
            </TouchableOpacity>
            <TouchableOpacity style={[ drawerStyle.item, drawerStyle.itemFirst ]}
                onPress={() => {props.navigation.navigate('Vagas')}}>
                    <MenuVagasSvg style={ drawerStyle.itemIcon } />
                    <Text style={ drawerStyle.itemText }>Vaga</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ drawerStyle.item }
                onPress={() => {props.navigation.navigate('Curriculo'), {screen: 'Curriculo'}}}>
                    <CurriculoSvg style={ drawerStyle.itemIcon } />
                    <Text style={[ drawerStyle.itemText, drawerStyle.itemTextOdd ]}>Currículo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ drawerStyle.item }
                onPress={() => {props.navigation.navigate('Processos')}}>
                    <MenuCandidaturaSvg style={ drawerStyle.itemIcon } />
                    <Text style={ drawerStyle.itemText }>Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ drawerStyle.item }
                onPress={() => {props.navigation.navigate('Perfil')}}>
                    <MenuPerfilSvg style={ drawerStyle.itemIcon } />
                    <Text style={[ drawerStyle.itemText, drawerStyle.itemTextOdd ]}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ drawerStyle.item }
                onPress={() => handleSignOut()}>
                    <MenuSairSvg style={ drawerStyle.itemIcon }/>
                    <Text style={ drawerStyle.itemText }>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}