import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { IconBox, Help } from '../../shared';
import { CloseButtonSvg, ClockSvg } from '../../assets';
import styles from './styles';
import { candidaturaService, vagaService, adicionalService, empresaService, usuarioService, enderecoService, profissaoService } from '../../services'
class ProcessosVaga extends Component{

    state = {
        vaga: {},
        adicionais: [],
        nomeFantasiaEmpresa: '',
        nomeProfissao: '',
        logradouroEndereco: ''
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        let arr = []
        const banDic = [13, 14, 15, 16, 17, 18, 19, 20, 21]

        const { codVaga } = await candidaturaService.getCandidatura(this.props.route.params.codCandidatura)
        const { data } = await vagaService.getRequisitosByCodVaga(codVaga)
        const vaga = await vagaService.getVaga(codVaga)
        const { nomeFantasiaEmpresa, codUsuario } = await empresaService.getEmpresa(vaga.codEmpresa)
        const { nomeProfissao } = await profissaoService.getProfissaoByProfissaoId(vaga.codProfissao)
        const { codEndereco } = await usuarioService.getUsuarioById(codUsuario);
        const { logradouroEndereco } = await enderecoService.getEnderecoById(codEndereco)

        for (const element of data) {   
            const index = banDic.indexOf(element.codAdicional)
            const adicionaRes = await adicionalService.getAdicionalById(element.codAdicional)
            index < 0 && arr.push(adicionaRes.data)
        }
        this.setState({vaga, adicionais: arr, nomeFantasiaEmpresa, nomeProfissao, logradouroEndereco})
    }
    
    confirmCancel = async () => {
        Alert.alert(
            "Atenção",
            "Você está prestes a cancelar uma candidatura. Deseja continuar?",
            [
              {
                text: "Cancelar",
              },
              { text: "OK", onPress: () => this.cancel() }
            ],
            { cancelable: true }
          );
    }

    cancel = async () => {
        await candidaturaService.cancelCandidatura(this.props.route.params.codCandidatura)
        this.props.navigation.goBack()
    }

    render(){
        return(
            <SafeAreaView style={ styles.container }>
                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.logo }>
                        <Image style={ styles.logoImg } source={require('../../assets/images/empresas/empresa-colegio.jpg')} />
                    </View>
                    <Text style={[ styles.text, styles.nome ]}>{this.state.nomeFantasiaEmpresa}</Text>

                    <Text style={[ styles.text, styles.cargo ]}>Professor</Text>

                    <View style={ styles.item }>
                        <Image style={ styles.icon } source={require('../../assets/images/icons/empresa.png')} />
                        <Text style={[ styles.text, styles.endereco ]}>{this.state.logradouroEndereco}</Text>
                    </View>

                    <View style={ styles.item }>
                        <ClockSvg style={ styles.icon } color="red"/>
                        <Text style={[ styles.text, styles.horario ]}>Tempo integral</Text>
                    </View>

                    <Text style={[ styles.text, styles.title ]}>Requisitos</Text>
                    <View style={ styles.requisitos }>
                        <View style={ styles.list }>
                            {this.state.adicionais.map(adicional => (
                                <IconBox key={adicional.codAdicional} name={adicional.nomeAdicional} tipo="habilidade" img={adicional.imagemAdicional}></IconBox>
                            ))}
                        </View>
                    </View>

                    <Text style={[ styles.text, styles.title ]}>Benefícios</Text>
                    <View style={ styles.beneficios }>
                        <View style={ styles.item }>
                            <Text style={[ styles.text, styles.beneficio ]}>Vale Refeição</Text>
                        </View>
                        <View style={ styles.item }>
                            <Text style={[ styles.text, styles.beneficio ]}>Vale Transporte</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={ styles.btn }
                    onPress={() => this.confirmCancel()}>
                        <Text style={ styles.btnText }>Cancelar candidatura</Text>
                        <CloseButtonSvg style={[ styles.icon, styles.iconX ]} color="#9d1d64"/>
                    </TouchableOpacity>
                </ScrollView>
                <Help/>
            </SafeAreaView>
        );
    };
}

export { ProcessosVaga };