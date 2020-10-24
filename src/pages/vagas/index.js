import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity} from 'react-native';

import { authService, curriculoService } from '../../services';
import { Vaga } from './component';
import { Variables } from '../../shared';
import styles from './styles';
import { CurriculoSvg } from '../../assets'

class Vagas extends Component{

    state = {
        isCurriculoSet: false,
    };

    componentDidMount(){
        this.fetchAuthData();
    }

    async fetchAuthData(){
        const authData = await authService.getData();
        try {
            const curriculoRes = await curriculoService.getCurriculoByCandidatoId(authData.codCandidato);
            if(!curriculoRes.data){
                this.setState({isCurriculoSet: true});
            };
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            <View style={ styles.container }>
                {/* <Text style={ styles.text }>
                    Nenhuma vaga encontrada no momento T_T
                    </Text>
                    
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => console.log('click')}>
                    <Text style={[ Variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                </TouchableOpacity> */}
                {this.state.isCurriculoSet ?
                    <SafeAreaView>
                        <CurriculoSvg/>
                        <Text style={ styles.text }>
                        Para continuar cadastre um currículo
                        </Text>
                        <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                        onPress={() => this.props.navigation.navigate('CadastroCurriculo')}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar do curriculo</Text>
                        </TouchableOpacity>
                    </SafeAreaView> :
                    <SafeAreaView style={ styles.slider } >
                        <ScrollView style={ styles.scrollView } horizontal>
                            <Vaga style={ styles.first } ></Vaga>
                            <Vaga></Vaga>
                            <Vaga></Vaga>
                        </ScrollView>
                    </SafeAreaView>
                }   
            </View>
        )
    }
}

export { Vagas };