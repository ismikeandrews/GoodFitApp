import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity} from 'react-native';

import { authService, vagaService,  } from '../../services';
import { Vaga } from './component';
import { Variables, Menu, Help } from '../../shared';
import styles from './styles';
import { CurriculoSvg } from '../../assets'

class Vagas extends Component{

    state = {
        isCurriculoSet: false,
        vagas: []
    };

    componentDidMount(){
        this.fetchAuthData();
    }

    async fetchAuthData(){
        const authData = await authService.getData();
        const vagaRes = await vagaService.match(authData.codCandidato, authData.curriculo.codCurriculo)
        console.log(authData)
        console.log(vagaRes.data)
        this.setState({isCurriculoSet: authData.curriculo.isSet, vagas: vagaRes.data})
    }

    render(){
        return(
            <View style={ styles.container }>
                <Menu {...this.props}/>
                <View style={ styles.content }>
                {/* <Text style={ styles.text }>
                    Nenhuma vaga encontrada no momento T_T
                    </Text>
                    
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => console.log('click')}>
                    <Text style={[ Variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                </TouchableOpacity> */}
                    {/* {this.state.isCurriculoSet === false ?
                        <SafeAreaView>
                            <View style={ styles.contentEmpty }>
                                <CurriculoSvg style={ styles.icon } />
                                <Text style={ styles.text }>
                                    Para continuar cadastre um currículo
                                </Text>
                                <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                                onPress={() => this.props.navigation.navigate('Curriculo', {screen: 'CadastroCurriculo'})}>
                                    <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar do curriculo</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView> :
                        <SafeAreaView style={ styles.slider } >
                            <ScrollView style={ styles.scrollView } horizontal>
                                <Vaga style={ styles.first } ></Vaga>
                                <Vaga></Vaga>
                                <Vaga></Vaga>
                            </ScrollView>
                        </SafeAreaView>
                    } */}
                    <SafeAreaView style={ styles.slider } >
                        <ScrollView style={ styles.scrollView } horizontal>
                            <Vaga style={ styles.first } ></Vaga>
                            <Vaga></Vaga>
                            <Vaga></Vaga>
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <Help/>
            </View> 
        )
    }
}

export { Vagas };