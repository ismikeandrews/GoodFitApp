import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Cadastro, ProcessosVaga } from './pages'
import BottomRoutes from './bottom.routes'

const AppStack = createStackNavigator();

export default function StackRoutes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Cadastro" component={Cadastro}/>
                <AppStack.Screen name="CadastroCurriculo" component={BottomRoutes}/>
                <AppStack.Screen name="ProcessosVaga" component={ProcessosVaga}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}