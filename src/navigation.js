import React, { useState, useMemo } from 'react';
import { ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from './config/authContext'
import { Login, Cadastro, Vagas, CadastroCurriculo, Processos, Perfil, Curriculo, ProcessosVaga } from './pages';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const ProcessosStack = createStackNavigator();
const CurriculoStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProcessosStackScreen = () => (
    <ProcessosStack.Navigator screenOptions={{ headerShown: false }}>
        <ProcessosStack.Screen name="Processos" component={Processos}/>
        <ProcessosStack.Screen name="ProcessosVaga" component={ProcessosVaga}/>
    </ProcessosStack.Navigator>
);

const CurriculoStackScreen = () => {
    return (
        <CurriculoStack.Navigator screenOptions={{ headerShown: false }}>
            <CurriculoStack.Screen name="Curriculo" component={Curriculo}/>
            <CurriculoStack.Screen name="CadastroCurriculo" component={CadastroCurriculo}/>
        </CurriculoStack.Navigator>
    )
}

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Vagas" component={Vagas} />
        <Tabs.Screen name="Curriculo" component={CurriculoStackScreen}/>
    </Tabs.Navigator>
);

export default Navigation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => {
        return {
            signIn: (token) => {
                setIsLoading(false)
                setUserToken(token)
            },
            signOut: () => {
                setIsLoading(false)
                setUserToken(null)
            }
        }
    }, []);

    if (isLoading) {
        return  <Text>loading</Text>
    };

    return (

        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken ? (
                    <Drawer.Navigator>
                        <Drawer.Screen name="Vagas" component={TabsScreen}/>
                        <Drawer.Screen name="Processos" component={ProcessosStackScreen}/>
                        <Drawer.Screen name="Perfil" component={Perfil}/>
                    </Drawer.Navigator>
                ) : (
                    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                        <AuthStack.Screen name="Login" component={Login}/>
                        <AuthStack.Screen name="Cadastro" component={Cadastro}/>
                    </AuthStack.Navigator>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    )
};