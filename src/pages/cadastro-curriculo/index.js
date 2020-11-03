import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Etapa1, Etapa2, Etapa3, Etapa4, Etapa5 } from './etapas';
import { Stepper, Help } from '../../shared';
import { Variables, Menu } from '../../shared';
import { authService, curriculoService, experienciaProfissionalService } from '../../services';
import { experienciaValidation } from '../../validations';
import styles from './styles';

class CadastroCurriculo extends Component{

    state = {
        page: 0, 
        total: 5,
        adicionaisSelect: [],
        adicionais: [],
        descricaoCurriculo: '',
        schoolName: '',
        literateName: '',
        experiencesSet: false,
        experiencias: [],
        cargos: []
    };

    callbackFunctionE1 = (childData) => {
        this.setState({descricaoCurriculo: childData});
    };

    callbackFunctionE2 = (childData) => {

        let arr = [];
        for (const adicional of childData) {
            arr.push(adicional.codAdicional);
            adicional.tipo === 'literate' ? this.setState({literateName: adicional.nome}) : this.setState({schoolName: adicional.nome})
        }
        this.setState({adicionaisSelect: arr});
    };

    callbackFunctionE3 = (childData) => {
        if (!childData) {
            this.setState({experiencesSet: childData});
        }else{
            let arr = [];
            for (const experience of childData) {
                let expObj = {
                    empresaExperienciaProfissional: experience.empresaExperienciaProfissional,
                    descricaoExperienciaProfissional: experience.descricaoExperienciaProfissional,
                    isEmpregoAtualExperienciaProfissional: experience.isEmpregoAtualExperienciaProfissional,
                    dataInicioExperienciaProfissional: experience.dataInicioExperienciaProfissional,
                    dataFinalExperienciaProfissional: experience.dataFinalExperienciaProfissional,
                    codProfissao: experience.codProfissao,
                    codCurriculo: null
                };
                arr.push(expObj);
            };
            this.setState({experiencias: arr, experiencesSet: true});
        }
    };

    callbackFunctionE4 = (childData) => {
        let arr = [];
        for (const adicional of childData) {
            arr.push(adicional.cod);
        }
        this.setState({adicionais: arr});
    }

    callbackFunctionE5 = (childData) => {
        let arr = [];
        for (const cargo of childData) {
            arr.push(cargo.cod);
        }
        this.setState({cargos: arr});
    };

    handleSubmit = async () => {
        try {
            const authData = await authService.getData()
            if (this.state.adicionais.length > 2 || this.state.adicionaisSelect.length === 2 || this.state.cargos.length > 2) {
                let isValid = true
                let sendExp = {experiencias: []}
                if(this.state.experiencesSet != false){
                    for (const exp of this.state.experiencias) {
                        const expValidated = await experienciaValidation.validate(exp);
                        if (expValidated.isValid) {
                            sendExp.experiencias.push({
                                empresaExperienciaProfissional: expValidated.empresaExperienciaProfissional.value,
                                descricaoExperienciaProfissional: expValidated.descricaoExperienciaProfissional.value,
                                isEmpregoAtualExperienciaProfissional: expValidated.isEmpregoAtualExperienciaProfissional.value,
                                dataInicioExperienciaProfissional: expValidated.dataInicioExperienciaProfissional.value,
                                dataFinalExperienciaProfissional: expValidated.dataFinalExperienciaProfissional.value,
                                videoExperienciaProfissional: "",
                                codProfissao: expValidated.codProfissao.value,
                                codCurriculo: null
                            })
                        }else{
                            isValid = false
                        }
                    }
                }
                if (isValid) {
                    const curriculoObj = { descricaoCurriculo: this.state.descricaoCurriculo, codCandidato: authData.codCandidato }
                    const { data } = await curriculoService.setCurriculo(curriculoObj)
                    for(const element of sendExp.experiencias){
                        element.codCurriculo = data
                    }
                    this.state.experiencesSet != false && await curriculoService.setExperiences(sendExp)
                    // creating adicional obj cargo obj and setting both
                    const adicionalObj = { codCurriculo: data, adicionais: [...this.state.adicionais, ...this.state.adicionaisSelect] }
                    const cargoObj = { codCurriculo: data, cargos: this.state.cargos }
                    await curriculoService.setAdicionalCurriculoList(adicionalObj)
                    await curriculoService.setCargoCurriculoList(cargoObj)
                    //updating authService and navigating to curriculo
                    authService.updateCurriculo(data)
                    Alert.alert('Curriculo cadastrado com sucesso');
                    this.props.navigation.push('Vagas')  
                }else{
                    Alert.alert('Seu formulario contem erros')
                }
            }else{
                Alert.alert('O formulario contem erros');    
            }
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao cadastrar o curriculo');
        }
    }

    currentPage(){
        if (this.state.page === 0) {
            return (
                <Etapa1
                descricaoCurriculo={this.state.descricaoCurriculo} 
                parentCallback={this.callbackFunctionE1}/>
            );
        };
        if (this.state.page === 1) {
            return (
                <Etapa2
                school={this.state.schoolName}
                literate={this.state.literateName}
                parentCallback={this.callbackFunctionE2}/>
            );
        };
        if (this.state.page === 2) {
            return (
                <Etapa3
                isSet={this.state.experiencesSet}
                experiences={this.state.experiencias}
                parentCallback={this.callbackFunctionE3}/>
            );
        };
        if (this.state.page === 3) {
            return (
                <Etapa4
                adicionais={this.state.adicionais}
                parentCallback={this.callbackFunctionE4}/>
            );
        };
        if (this.state.page === 4) {
            return (
                <Etapa5
                categorias={this.state.cargos}
                parentCallback={this.callbackFunctionE5}/>
            );
        };
    }

    render(){
        return(
            <View>
                <Menu {...this.props}/>
                <SafeAreaView style={styles.container}>
                    <Stepper page={this.state.page} total={this.state.total}/>
                        <ScrollView style={styles.scrollView}>
                            {this.currentPage()}
                            <View style={[ Variables.contentBtn, styles.contentBtn ]}>
                                {this.state.page + 1 === this.state.total ?
                                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnCadastrar ]} onPress={() => this.handleSubmit()}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar</Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnNext ]} onPress={() => this.setState({page: this.state.page + 1})}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Próximo</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.page > 0 &&
                                    <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnPrev ]} onPress={() => this.setState({page: this.state.page - 1})}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Voltar</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </ScrollView>
                    <Help/>
                </SafeAreaView>
            </View>
        );
    };
}

export {CadastroCurriculo};