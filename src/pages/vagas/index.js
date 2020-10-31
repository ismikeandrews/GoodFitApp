import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { authService, vagaService, candidaturaService } from '../../services';
import { Vaga } from './component';
import { Variables, Menu, Help } from '../../shared';
import styles from './styles';
import { CurriculoSvg } from '../../assets'
import moment from 'moment';

class Vagas extends Component{

    state = {
        isCurriculoSet: false,
        vagas: [],
    };

    componentDidMount(){
        this.fetchAuthData();
    };

    callback = async (childData) => {
        const { codCandidato } = await authService.getData()
        let arr = this.state.vagas;
        arr = arr.filter(vaga => {
            return vaga.codVaga !== childData
        })
        const candidaturaObj = {
            codCandidato,
            codVaga: childData,
            dataCandidatura: moment().unix()
        }
        console.log(candidaturaObj)
        await candidaturaService.setCandidatura(candidaturaObj);
        this.setState({vagas: arr})
    }

    fetchAuthData = async () => {
        try {
            const { curriculo, codCandidato } = await authService.getData();
            if (curriculo.isSet) {
                let arr = [];
                const candidaturas = await candidaturaService.getCandidaturasByCodCandidato(codCandidato)
                const vagaBanList = candidaturas.map(candidatura => candidatura.codVaga)
                const vagaRes = await vagaService.match(codCandidato, curriculo.codCurriculo);
                for (const vaga of vagaRes.data) {
                    let index = vagaBanList.indexOf(vaga.codVaga)
                    index < 0 && arr.push(vaga)
                }
                this.setState({isCurriculoSet: curriculo.isSet, vagas: arr});
            }else{
                this.setState({isCurriculoSet: curriculo.isSet});
            }
        } catch (error) {
            console.log(error);
        }
    };

    renderVagas(){
        if(this.state.vagas.length === 0){
            return (
                <View>
                    <Text style={ styles.text }>
                        Nenhuma vaga encontrada no momento T_T
                    </Text>
                        
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => console.log('click')}>
                        <Text style={[ Variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return (
                <SafeAreaView style={ styles.slider } >
                    <ScrollView style={ styles.scrollView } horizontal>
                        {this.state.vagas.map(vaga => (
                            <Vaga key={vaga.codVaga} style={ styles.first } properties={vaga} parentCallback={this.callback}></Vaga>
                        ))}
                    </ScrollView>
                </SafeAreaView> 
            )
        }
    }

    render(){
        return(
            <View style={ styles.container }>
                <Menu {...this.props}/>
                <View style={ styles.content }>
                
                    {this.state.isCurriculoSet ?
                        <View>
                            {this.renderVagas()}
                        </View>
                        : 
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
                    </SafeAreaView>
                    }
                </View>
                <Help/>
            </View> 
        );
    };
}

export { Vagas };