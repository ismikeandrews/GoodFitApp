import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { DescriptionBox } from '../../../../shared';
import { Variables } from '../../../../shared';
import styles from './styles';
import { profissaoService } from '../../../../services'
import { CandidaturaFinalizadoSvg, CandidaturaAprovadoSvg } from '../../../../assets';

class Etapa3 extends Component {

    state = {
        yesSelected: false,
        noSelected: false,
        experiences: [this.initialExperienceState()],
       professions: []
    };

    componentDidMount(){
        this.fetchData()
    };

    initialExperienceState(){
        return {
            isOpen: false,
            empresaExperienciaProfissional: '',
            descricaoExperienciaProfissional: '',
            isEmpregoAtualExperienciaProfissional: false,
            codProfissao: null,
            nomeProfissaoDisplay: '',
            togglePicker: false,
            dataInicioExperienciaProfissional:{
                toggleCalendar: false,
                display: '',
                timestamp: moment().unix()
            },
            dataFinalExperienciaProfissional:{
                toggleCalendar: false,
                display: '',
                timestamp: moment().unix()
            }
       }
    }

    async fetchData(){
        const profissaoRes = await profissaoService.getProfissaoList();
        this.setState({professions: profissaoRes.data})
    };

    toggleNewExperience(){
        const arr = this.state.experiences;
        const experienceObj = {
             isOpen: false,
             empresaExperienciaProfissional: '',
             descricaoExperienciaProfissional: '',
             isEmpregoAtualExperienciaProfissional: false,
             dataInicioExperienciaProfissional:{
                toggleCalendar: false,
                display: '',
                timestamp: moment().unix()
            },
            dataFinalExperienciaProfissional:{
                toggleCalendar2: false,
                display: '',
                timestamp: moment().unix()
            },
            codProfissao: null,
            nomeProfissaoDisplay: '',
            togglePicker: false,
        };
 
        arr.push(experienceObj);
        this.setState({experiences: arr});
    };

    openCloseAccord(index){
        const arr = this.state.experiences;
        arr[index].isOpen === true ? arr[index].isOpen = false : arr[index].isOpen = true;
        this.setState({experiences: arr});
    }

    handleEmpresaExperienciaProfissional(index, text){
        const arr = this.state.experiences;
        arr[index].empresaExperienciaProfissional = text
        this.setState({experiences: arr})
    }

    handleCodCargo(index, codCargo, itemIndex){
        const arr = this.state.experiences;
        arr[index].codProfissao = codCargo;
        arr[index].nomeProfissaoDisplay = this.state.professions[itemIndex].nomeProfissao;
        this.setState({experiences: arr})
    }

    handleTogglePicker(index){
        const arr = this.state.experiences;
        arr[index].togglePicker === true ? arr[index].togglePicker = false : arr[index].togglePicker = true;
        this.setState({experiences: arr})
    }

    handleToggleInitCalendar(index){
        const arr = this.state.experiences;
        arr[index].dataInicioExperienciaProfissional.toggleCalendar === true ? arr[index].dataInicioExperienciaProfissional.toggleCalendar = false : arr[index].dataInicioExperienciaProfissional.toggleCalendar = true;
        this.setState({experiences: arr})
    }

    handleToggleFinishCalendar(index){
        const arr = this.state.experiences;
        arr[index].dataFinalExperienciaProfissional.toggleCalendar === true ? arr[index].dataFinalExperienciaProfissional.toggleCalendar = false : arr[index].dataFinalExperienciaProfissional.toggleCalendar = true;
        this.setState({experiences: arr})
    }

    handleInitDate(index, data){
        const arr = this.state.experiences
        arr[index].dataInicioExperienciaProfissional.timestamp = moment(data).unix();
        arr[index].dataInicioExperienciaProfissional.display = moment(data).format("DD/MM/YYYY");
        this.setState({experiences: arr})
    }

    handleFinishDate(index, data){
        const arr = this.state.experiences
        arr[index].dataFinalExperienciaProfissional.timestamp = moment(data).unix();
        arr[index].dataFinalExperienciaProfissional.display = moment(data).format("DD/MM/YYYY");
        this.setState({experiences: arr})
    }

    render(){
        return (
            <View style={ styles.container }>
                <Text style={ Variables.title }>Experiência profissional</Text>
                <Text style={ Variables.subtitle }>Você já trabalhou antes? Conte-nos um pouco...</Text>
    
                <View style={this.state.yesSelected ? [styles.content, styles.yes] : styles.content}>
                    <TouchableOpacity style={this.state.noSelected ? [styles.btn, styles.btnActive] : styles.btn} onPress={() => this.setState({noSelected: true, yesSelected: false, experiences: [this.initialExperienceState()]})}>
                        <CandidaturaFinalizadoSvg/>
                        <Text style={ styles.label }>Não</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={this.state.yesSelected ? [styles.btn, styles.btnActive] : styles.btn} onPress={() =>  this.setState({yesSelected: true, noSelected: false})}>
                        <CandidaturaAprovadoSvg/>
                        <Text style={ styles.label }>Sim</Text>
                    </TouchableOpacity>
                </View>
    
                {this.state.yesSelected === true && (
                    <View>
                        <View>
                            {this.state.experiences.map((experience, index) => (
                                <View key={index}>
                                    <TouchableOpacity style={[ experience.isOpen === false ? styles.accordion : [styles.accordion, styles.accordionActive] ]}
                                    onPress={() => this.openCloseAccord(index)}>
                                        <Text style={ styles.accordionTitle }>Experiência</Text>
                                    </TouchableOpacity>
                                    <View style={[ experience.isOpen === false ? styles.xp : styles.xpActive ]}>
                                        <View style={ styles.form }>
                                            <View style={ styles.formContent }>
                                                <View style={ styles.formName }>
                                                    <Text style={ Variables.label }>Nome da empresa</Text>
                                                    <TextInput style={ Variables.input } value={experience.empresaExperienciaProfissional} onChangeText={ text => this.handleEmpresaExperienciaProfissional(index, text) }/>
                                                </View>
                                            </View>
    
                                            <View style={ styles.formContent }>
                                                <View style={ styles.formItem }>
                                                    <Text style={ Variables.label }>Cargo</Text>
                                                    <TextInput style={ Variables.input } value={experience.nomeProfissaoDisplay} onFocus={() => this.handleTogglePicker(index)} onBlur={() => this.handleTogglePicker(index)}/>
                                                </View>
                                                <View style={ styles.formItem }>
                                                    {experience.togglePicker && (
                                                        <Picker selectedValue={experience.codProfissao}
                                                        onValueChange={(itemValue, itemIndex) => this.handleCodCargo(index, itemValue, itemIndex)}>
                                                            {this.state.professions.map(profession => (
                                                                <Picker.Item label={profession.nomeProfissao} value={profession.codProfissao}/>
                                                            ))}
                                                        </Picker>
                                                    )}
                                                </View>
                                            </View>
    
                                            <View style={ styles.formContent }>
                                                <View style={ styles.formItem }>
                                                    <Text style={ Variables.label }>Data de início</Text>
                                                    <TextInput style={ Variables.input } onFocus={() => this.handleToggleInitCalendar(index)} onBlur={() => this.handleToggleInitCalendar(index)} value={experience.dataInicioExperienciaProfissional.display}/>
                                                    {experience.dataInicioExperienciaProfissional.toggleCalendar && (
                                                        <Text>Date Picker aqui</Text>
                                                    )}
                                                    {/* <DateTimePicker
                                                    mode="date"
                                                    value={experience.dataInicioExperienciaProfissional.timestamp}
                                                    display="default"
                                                    onChange={(event, data) => setBirthDay(index, data)}/> */}
                                                </View>
                                                <View style={ styles.formItem }>
                                                    <Text style={ Variables.label }>Data de término</Text>
                                                    <TextInput style={ Variables.input } onFocus={() => this.handleToggleFinishCalendar(index)} onBlur={() => this.handleToggleFinishCalendar(index)} value={experience.dataFinalExperienciaProfissional.display}/>
                                                    {experience.dataFinalExperienciaProfissional.toggleCalendar && (
                                                        <Text>Date Picker aqui</Text>
                                                    )}
                                                </View>
                                            </View>
    
                                            <Text style={ Variables.label }>Sobre o emprego</Text>
                                            <DescriptionBox placeholder='Escreva uma breve descrição sobre seu emprego e suas experiências'></DescriptionBox>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View>
                            <TouchableOpacity style={ styles.accordion } onPress={() => this.toggleNewExperience()}>
                                <Text style={[ styles.accordionTitle, styles.newTitle ]}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.accordion } onPress={() => console.log(this.state.experiences)}>
                                <Text style={[ styles.accordionTitle, styles.newTitle ]}>tester</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

export {Etapa3}
