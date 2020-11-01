import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { IconBox } from '../../../../shared';
import styles from './styles';
import { VagasCheckSvg, ClockSvg } from '../../../../assets'
import { adicionalService, vagaService } from '../../../../services'
class Vaga extends Component{

    state = {
        requisitos: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        let arr = []
        const banDic = [13, 14, 15, 16, 17, 18, 19, 20, 21]
        try {
            const { data } = await vagaService.getRequisitosByCodVaga(this.props.properties.codVaga)
            for (const element of data) {
                const index = banDic.indexOf(element.codAdicional)
                const adicionaRes = await adicionalService.getAdicionalById(element.codAdicional)
                index < 0 && arr.push(adicionaRes.data)
            }
            this.setState({requisitos: arr})
        } catch (error) {   
            console.log(error)
            Alert.alert("Ocorreu um erro, tente novamente mais tarde")
        }
    }

    render(){
        return(
            <SafeAreaView style={ styles.container }>
                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.logo }>
                        <Image style={ styles.logoImg } source={require('../../../../assets/images/empresas/empresa-colegio.jpg')} />
                    </View>
                    
                    <View style={ styles.content }>
                        <View style={ styles.buttons }>
                            <TouchableOpacity style={ styles.btn }
                            onPress={() => this.props.parentCallback(this.props.properties.codVaga)}>
                                <VagasCheckSvg style={[ styles.icon, styles.iconX ]}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={[ styles.text, styles.cargo ]}>{this.props.properties.nomeProfissao}</Text>

                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../../../assets/images/icons/empresa.png')} />
                            <Text style={[ styles.text, styles.nome ]}>{this.props.properties.nomeFantasiaEmpresa}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Image style={ styles.icon } source={require('../../../../assets/images/icons/local.png')} />
                            <Text style={[ styles.text, styles.endereco ]}>{this.props.properties.logradouroEndereco}</Text>
                        </View>

                        <View style={ styles.item }>
                            <ClockSvg color="#9d1d64" style={ styles.icon }/>
                            <Text style={[ styles.text, styles.horario ]}>Tempo integral</Text>
                        </View>

                        <Text style={[ styles.text, styles.title ]}>Requisitos</Text>
                        <View style={ styles.requisitos }>
                            <View style={ styles.list }>
                                <View style={ styles.reqItem }>
                                    {this.state.requisitos.map(requisito => (
                                        <IconBox name={requisito.nomeAdicional} tipo="habilidade" img={requisito.imagemAdicional}></IconBox>
                                    ))}
                                </View>
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}

export { Vaga };