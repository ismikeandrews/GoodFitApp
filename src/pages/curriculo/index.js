import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { DescriptionBox, IconBox, Formacao, Variables, Menu, Help } from '../../shared'
import { curriculoService, authService } from '../../services'
import styles from './styles'

class Curriculo extends Component{

    state = {
        descricaoCurriculo: '',
        school: {},
        literate: {},
        adicionais: [],
        cargos: [],
        curriculo: {}
    }

    componentDidMount(){
        this.fetchData()
    }

    async fetchData(){
        try {
            const authData = await authService.getData();
            const schoolDic = [13, 14, 15, 16, 17, 18];
            const literateDic = [19, 20, 21];
            let filteredAdicionais = []

            if (authData.curriculo.isSet) {
                const curriculoRes = await curriculoService.getCurriculoByCandidatoId(authData.codCandidato)
                const adicionalRes = await curriculoService.getAdicionaisByCurriculo(authData.curriculo.codCurriculo)
                const cargoRes = await curriculoService.getCargosByCurriculo(authData.curriculo.codCurriculo)
                for (const element of adicionalRes.data) {
                    let schoolIndex = schoolDic.indexOf(element.codAdicional);
                    let literateIndex = literateDic.indexOf(element.codAdicional);
                    if(schoolIndex > -1){
                        this.setState({school: element})
                    }
                    if (literateIndex > -1) {
                        this.setState({literate: element})
                    }
                    if (literateIndex < 0 && schoolIndex < 0) {
                        filteredAdicionais.push(element)
                    }
                }

                this.setState({
                    descricaoCurriculo: curriculoRes.data.descricaoCurriculo, 
                    adicionais: filteredAdicionais, 
                    cargos: cargoRes.data,
                    curriculo: authData.curriculo
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <View>
                <Menu {...this.props}/>
                <View style={ styles.container }>
                    {this.state.curriculo.isSet ?
                        <SafeAreaView style={ styles.safeArea }>
                            <ScrollView style={ styles.scrollView }>
                                <View style={ styles.header }>
                                    <Text style={[ styles.text, styles.title ]}>Meu currículo</Text>
                                    <Text style={[ styles.text, styles.subtitle ]}>Um pouco sobre mim...</Text>
                                </View>

                                <DescriptionBox/>

                                <View style={[ styles.item, styles.requisitos ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Requisitos</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Minhas formações básicas em...</Text>

                                    <Formacao tipo={true} title='Escolaridade' value={this.state.school.nomeAdicional}/>
                                    <Formacao tipo={false} title='Alfabetização' value={this.state.literate.nomeAdicional}/>
                                </View>

                                <View style={[ styles.item, styles.habilidades ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Habilidades</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Eu sou bom com...</Text>
                                    
                                    <View style={ styles.list }>
                                        {this.state.adicionais.map(adicional => (
                                            <IconBox key={adicional.codAdicional} name={adicional.nomeAdicional} tipo="habilidade" img={adicional.imagemAdicional}/>
                                        ))}
                                    </View>
                                </View>

                                <View style={[ styles.item, styles.objetivo ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Objetivo profissional</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Gostaria de trabalhar com...</Text>
                                    
                                    <View style={ styles.list }>
                                        {this.state.cargos.map(cargo =>
                                            <IconBox key={cargo.codCategoria} name={cargo.nomeCategoria} img={cargo.imagemCategoria}/>
                                        )}
                                    </View>
                                </View>

                                <View style={[ styles.list, styles.btnList ]}>
                                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.dwl ]}
                                    onPress={() => console.log('clicked')}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Download</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                                    onPress={() => this.props.navigation.push('CadastroCurriculo')}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </SafeAreaView> :
                        <View>
                            <Text>Sem curriculo</Text>
                            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                            onPress={() => this.props.navigation.push('CadastroCurriculo')}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Cadastro</Text>
                            </TouchableOpacity>
                        </View>

                    }   
                </View>
                <Help/>
            </View>
        )
    }
}

export { Curriculo }