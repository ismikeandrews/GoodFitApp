import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Etapa1, Etapa2, Etapa3, Etapa4, Etapa5 } from './etapas';
import { Stepper, Help } from '../../shared';
import { Variables, Menu } from '../../shared';
import { authService, curriculoService, experienciaProfissionalService } from '../../services'
import { experienciaValidation } from '../../validations'
import styles from './styles';

class CadastroCurriculo extends Component{

    state = {
        page: 0, 
        total: 5,
        adicionais: [],
        descricaoCurriculo: '',
        experiencesSet: false,
        experiencias: [],
        cargos: []
    };

    callbackFunctionE1 = (childData) => {
        this.setState({descricaoCurriculo: childData});
    }

    callbackFunctionE2 = (childData) => {
        let arr = []
        for (const adicional of childData) {
            arr.push(adicional.codAdicional)
        }
        this.setState({adicionais: arr});
    }

    callbackFunctionE3 = (childData) => {
        if (!childData) {
            this.setState({experiencesSet: childData})
        }else{
            let arr = []
            for (const experience of childData) {
                let expObj = {
                    empresaExperienciaProfissional: experience.empresaExperienciaProfissional,
                    descricaoExperienciaProfissional: experience.descricaoExperienciaProfissional,
                    isEmpregoAtualExperienciaProfissional: experience.isEmpregoAtualExperienciaProfissional,
                    // dataInicioExperienciaProfissional: experience.dataInicioExperienciaProfissional,
                    // dataFinalExperienciaProfissional: experience.dataFinalExperienciaProfissional,
                    codProfissao: experience.codProfissao,
                    codCurriculo: null
                }
                arr.push(expObj)
            }
            this.setState({experiencias: arr})
        }
    }

    callbackFunctionE4 = (childData) => {
        let arr = []
        for (const adicional of childData) {
            arr.push(adicional.cod)
        }
        this.setState({adicionais: [...arr, ...this.state.adicionais]})
    }

    callbackFunctionE5 = (childData) => {
        let arr = []
        for (const cargo of childData) {
            arr.push(cargo.cod)
        }
        this.setState({cargos: arr})
    }

    handleSubmit = async () => {
        try {
            if (this.state.adicionais.length > 4 || thi.state.cargos.length > 2) {
                const authData = await authService.getData()
                const curriculoObj = { descricaoCurriculo: this.state.descricaoCurriculo, codCandidato: authData.codCandidato }
                const curriculoRes = await curriculoService.setCurriculo(curriculoObj)
                const codCurriculo = curriculoRes.data;
                for (const adicional of this.state.adicionais) {
                    let adicionalObj = {
                        codCurriculo: codCurriculo,
                        codAdicional: adicional
                    }
                    await curriculoService.setAdicionalCurriculo(adicionalObj)
                }
                for (const cargo of this.state.cargos) {
                    let cargoObj = {
                        codCurriculo: codCurriculo,
                        codCategoria: cargo
                    }
                    await curriculoService.setCargoCurriculo(cargoObj)
                }
                if(this.state.experiencesSet != false){
                    for (const exp of this.state.experiencias) {
                        const expValidated = await experienciaValidation.validate(exp);
                        let expObj = {
                            empresaExperienciaProfissional: expValidated.empresaExperienciaProfissional.value,
                            descricaoExperienciaProfissional: expValidated.descricaoExperienciaProfissional.value,
                            isEmpregoAtualExperienciaProfissional: expValidated.isEmpregoAtualExperienciaProfissional.value,
                            dataInicioExperienciaProfissional: expValidated.dataInicioExperienciaProfissional.value,
                            dataFinalExperienciaProfissional: expValidated.dataFinalExperienciaProfissional.value,
                            codProfissao: exp.codProfissao,
                            codCurriculo: codCurriculo
                        }
                        console.log(expObj)
                        if (expValidated.isValid) {
                            await experienciaProfissionalService.setExperienciaProfissional(expObj)
                        }
                    }
                }
                Alert.alert('Curriculo cadastrado com sucesso'[{ text: "OK", onPress: () => this.props.navigation.navigate('Vagas')}]);
                authService.updateCurriculo(codCurriculo)
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
                parentCallback={this.callbackFunctionE1}/>
            );
        };
        if (this.state.page === 1) {
            return (
                <Etapa2
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
                parentCallback={this.callbackFunctionE4}/>
            );
        };
        if (this.state.page === 4) {
            return (
                <Etapa5
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