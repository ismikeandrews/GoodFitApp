import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import drawerStyle from './drawerStyle'
import { MenuVagasSvg, CurriculoSvg, MenuPerfilSvg, MenuCandidaturaSvg, CloseButtonSvg } from '../assets';

export function DrawerContent(props){
    const isDrawerOpen = useIsDrawerOpen();
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
                onPress={() => {props.navigation.navigate('Curriculo')}}>
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
        </View>
    )
}