import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView} from 'react-native'

import { Vaga } from './component'
import styles from './styles'

class Vagas extends Component{
    render(){
        return(
            <View style={ styles.container }>
                {/* <Text style={ styles.text }>
                    Nenhuma vaga encontrada no momento T_T
                </Text>

                <TouchableOpacity style={[ variables.btn, styles.btn ]}
                onPress={() => console.log('click')}>
                    <Text style={[ variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                </TouchableOpacity>
                <Menu/> */}

                <SafeAreaView style={ styles.slider } >
                    <ScrollView style={ styles.scrollView } horizontal>
                        <Vaga style={ styles.first } ></Vaga>
                        <Vaga></Vaga>
                        <Vaga></Vaga>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

export { Vagas }