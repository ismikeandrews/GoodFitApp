import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from './config/authContext'
import { Login, Cadastro, Vagas, CadastroCurriculo, Processos, Perfil, Curriculo, ProcessosVaga } from './pages';
import { authService } from './services';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const ProcessosStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProcessosStackScreen = () => (
    <ProcessosStack.Navigator screenOptions={{ headerShown: false }}>
        <ProcessosStack.Screen name="Processos" component={Processos}/>
        <ProcessosStack.Screen name="ProcessosVaga" component={ProcessosVaga}/>
    </ProcessosStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Vagas" component={Vagas} />
        <Tabs.Screen name="CadastroCurriculo" component={CadastroCurriculo}/>
        <Tabs.Screen name="Processos" component={ProcessosStackScreen}/>
        <Tabs.Screen name="Perfil" component={Perfil}/>
        <Tabs.Screen name="Curriculo" component={Curriculo}/>
    </Tabs.Navigator>
);

export default Navigation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => {
        return {
            signIn: (token) => {
                setIsLoading(false)
                setUserToken('token')
            },
            signOut: () => {
                setIsLoading(false)
                setUserToken(null)
            }
        }
    }, []);

    // useEffect(async () => {
    //     const authRes = await authService.getData();
    //     if (authRes) {
    //         //do smt
    //     }
    // }, []);

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