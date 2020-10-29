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
            if (this.state.adicionais.length > 2 || this.state.adicionaisSelect.length === 2 || this.state.cargos.length > 2) {
                const authData = await authService.getData()
                const curriculoObj = { descricaoCurriculo: this.state.descricaoCurriculo, codCandidato: authData.codCandidato }
                const curriculoRes = await curriculoService.setCurriculo(curriculoObj)
                const codCurriculo = curriculoRes.data;
                const adicionalObj = { codCurriculo: codCurriculo, adicionais: [...this.state.adicionais, ...this.state.adicionaisSelect] }
                const cargoObj = { codCurriculo: codCurriculo, cargos: this.state.cargos }
                await curriculoService.setAdicionalCurriculoList(adicionalObj)
                await curriculoService.setCargoCurriculoList(cargoObj)
                if(this.state.experiencesSet != false){
                    console.log("Here")
                    for (const exp of this.state.experiencias) {
                        const expValidated = await experienciaValidation.validate(exp);
                        let expObj = {
                            empresaExperienciaProfissional: expValidated.empresaExperienciaProfissional.value,
                            descricaoExperienciaProfissional: expValidated.descricaoExperienciaProfissional.value,
                            isEmpregoAtualExperienciaProfissional: expValidated.isEmpregoAtualExperienciaProfissional.value,
                            dataInicioExperienciaProfissional: expValidated.dataInicioExperienciaProfissional.value,
                            dataFinalExperienciaProfissional: expValidated.dataFinalExperienciaProfissional.value,
                            codProfissao: expValidated.codProfissao.value,
                            codCurriculo: codCurriculo
                        }
                        if (expValidated.isValid) {
                             await experienciaProfissionalService.setExperienciaProfissional(expObj)
                        }else{
                            Alert.alert('Seu formulario contem erros')
                        }
                    }
                }
                authService.updateCurriculo(codCurriculo)
                Alert.alert('Curriculo cadastrado com sucesso');
                this.props.navigation.navigate('Curriculo')
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