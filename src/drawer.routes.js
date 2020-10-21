import React from 'react';
import { createDrawerNavigator, DrawerItemList, } from '@react-navigation/drawer';
import { Vagas, CadastroCurriculo, Processos, Test, Perfil, Curriculo } from './pages'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {

  return (
    <Drawer.Navigator>
      <DrawerItemList name='Curriculo' component={Curriculo}/>
    </Drawer.Navigator>
  );
}