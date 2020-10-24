import React from 'react';

import { Vagas, CadastroCurriculo, Processos, Test, Perfil, Curriculo } from './pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Vagas" component={Vagas}/>
            <Tab.Screen name="CadastroCurriculo" component={CadastroCurriculo}/>
            <Tab.Screen name="Processos" component={Processos}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
            <Tab.Screen name="Curriculo" component={Curriculo}/>
            <Tab.Screen name="Test" component={Test}/>
        </Tab.Navigator>
    );
}
// screenOptions={{ headerShown: false }}