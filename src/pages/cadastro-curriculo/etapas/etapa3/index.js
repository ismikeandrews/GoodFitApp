import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, CheckBox } from 'react-native';
import moment from 'moment';
import { Variables, Datepicker} from '../../../../shared';
import styles from './styles';
import descriptionBoxStyles from './descriptionBoxStyles'
import { profissaoService } from '../../../../services'
import { CandidaturaFinalizadoSvg, CandidaturaAprovadoSvg, Etapa1VideoSvg, Etapa1TextoSvg } from '../../../../assets';

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

    sendDataToParent = () => {
        this.props.parentCallback(this.state.experiences);
    }

    initialExperienceState(){
        return {
            tabs: true,
            isOpen: false,
            empresaExperienciaProfissional: '',
            descricaoExperienciaProfissional: '',
            isEmpregoAtualExperienciaProfissional: false,
            codProfissao: null,
            togglePicker: false,
            toggleCalendar1: false,
            toggleCalendar2: false,
            dataInicioExperienciaProfissional:{timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()},
            dataFinalExperienciaProfissional:{timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()}
       }
    }

    async fetchData(){
        const profissaoRes = await profissaoService.getProfissaoList();
        this.setState({professions: profissaoRes.data})
    };

    toggleNewExperience = () => {
        const arr = this.state.experiences;
        const experienceObj = {
            tabs: true,
            isOpen: false,
            empresaExperienciaProfissional: '',
            descricaoExperienciaProfissional: '',
            isEmpregoAtualExperienciaProfissional: false,
            toggleCalendar1: false,
            toggleCalendar2: false,
            dataInicioExperienciaProfissional:{timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()},
            dataFinalExperienciaProfissional:{timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()},
            codProfissao: null,
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

    handleTogglePicker(index){
        const arr = this.state.experiences;
        arr[index].togglePicker === true ? arr[index].togglePicker = false : arr[index].togglePicker = true;
        this.setState({experiences: arr})
    }

    handleVideoTab(index){
        const arr = this.state.experiences;
        if (arr[index].tabs === false) {
            arr[index].tabs = true
        }
        this.setState({experiences: arr})
    }

    handleTextTab(index){
        const arr = this.state.experiences;
        if (arr[index].tabs === true) {
            arr[index].tabs = false
        }
        this.setState({experiences: arr})
    }
    
    //Fields
    handleEmpresaExperienciaProfissional(index, text){
        const arr = this.state.experiences;
        arr[index].empresaExperienciaProfissional = text
        this.setState({experiences: arr})
    }

    handleCodCargo(index, codCargo){
        const arr = this.state.experiences;
        arr[index].codProfissao = codCargo;
        this.setState({experiences: arr}, () => this.sendDataToParent())
    }

    handleToggleInitCalendar(index){
        const arr = this.state.experiences;
        arr[index].toggleCalendar1 === true ? arr[index].toggleCalendar1 = false : arr[index].toggleCalendar1 = true;
        this.setState({experiences: arr}, () => {
            this.sendDataToParent()
        })
    }

    handleToggleFinishCalendar(index){
        const arr = this.state.experiences;
        arr[index].toggleCalendar2 === true ? arr[index].toggleCalendar2 = false : arr[index].toggleCalendar2 = true;
        this.setState({experiences: arr}, () => {
            this.sendDataToParent()
        })
    }

    handleInitDate = (childData, index) => {
        const arr = this.state.experiences
        arr[index].dataInicioExperienciaProfissional = childData
        this.setState({experiences: arr})
    }

    handleFinishDate(childData, index){
        const arr = this.state.experiences
        arr[index].dataFinalExperienciaProfissional = childData
        this.setState({experiences: arr})
    }

    handleDescriptionText(index, text){
        const arr = this.state.experiences;
        arr[index].descricaoExperienciaProfissional = text;
        this.setState({experiences: arr});
    }


    render(){
        return (
            <SafeAreaView style={styles.safeArea}>
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
                        <ScrollView style={styles.scrollView}>
                            <View>
                                <View>
                                    {this.state.experiences.map((experience, index) => (
                                        <View key={index}>
                                            <View style={ styles.header }>
                                                <TouchableOpacity style={[ experience.isOpen === false ? styles.accordion : [styles.accordion, styles.accordionActive] ]}
                                                onPress={() => this.openCloseAccord(index)}>
                                                    <View style={ styles.header }>
                                                        <Text style={ styles.accordionTitle }>Experiência</Text>
                                                        <Etapa1VideoSvg style={ styles.accordiontIcon }/>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={ styles.delete }
                                                onPress={() => console.log('click')}>
                                                    <Etapa1VideoSvg style={ styles.deleteIcon }/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[ experience.isOpen === false ? styles.xp : styles.xpActive ]}>
                                                <View style={ styles.form }>
                                                    <View style={ styles.formContent }>
                                                        <View style={ styles.formItem }>
                                                            <Text style={ Variables.label }>Nome da empresa</Text>
                                                            <TextInput style={ Variables.input } onBlur={() => this.sendDataToParent()} value={experience.empresaExperienciaProfissional} onChangeText={ text => this.handleEmpresaExperienciaProfissional(index, text) }/>
                                                        </View>
                                                    </View>
            
                                                    <View style={ styles.formItem }>

                                                        <TouchableOpacity style={ styles.select }
                                                        onPress={() => this.handleTogglePicker(index)}>
                                                            <View style={ styles.selectItem }>
                                                                <Image style={ styles.image } source={require('../../../../assets/images/icons/requisitos/alfabetizacao.png')} />
                                                                <Text style={ styles.label }>Profissao</Text>
                                                            </View> 
                                                        </TouchableOpacity>
                                                        {experience.togglePicker === true &&
                                                            <SafeAreaView style={styles.scroll}>
                                                                <View style={ styles.list }>
                                                                    <View style={ styles.listContent }>
                                                                        <ScrollView style={styles.scrollView}>
                                                                            {this.state.professions.map(profession => (
                                                                                <TouchableOpacity key={profession.codProfession} style={ styles.item } onPress={() => { this.handleCodCargo(index, experience.codProfissao), this.handleTogglePicker(index)}}>
                                                                                    <Text style={ styles.itemText }>{profession.nomeProfissao}</Text>
                                                                                </TouchableOpacity>
                                                                            ))}
                                                                        </ScrollView>
                                                                    </View>
                                                                </View>
                                                            </SafeAreaView>
                                                        }

                                                    </View>

                                                    <View style={ styles.formItem }>
                                                        <Text style={ Variables.label }>Data de início</Text>
                                                        <View style={ styles.calendar }>
                                                            <TextInput style={[ Variables.input, styles.calendarInput ]} onFocus={() => this.handleToggleInitCalendar(index)} onBlur={() => this.handleToggleInitCalendar(index)} value={experience.dataInicioExperienciaProfissional.display}/>
                                                            <Etapa1VideoSvg style={ styles.calendarIcon }/>
                                                        </View>
                                                        {experience.toggleCalendar1 && (
                                                            <Datepicker
                                                            parentCallback={data => this.handleInitDate(data, index)}/>
                                                        )}
                                                    </View>
                                                    <View style={ styles.formItem }>
                                                        <Text style={ Variables.label }>Data de término</Text>
                                                        <View style={ styles.calendar }>
                                                            <TextInput style={[ Variables.input, styles.calendarInput ]} onFocus={() => this.handleToggleFinishCalendar(index)} onBlur={() => this.handleToggleFinishCalendar(index)} value={experience.dataFinalExperienciaProfissional.display}/>
                                                            <Etapa1VideoSvg style={ styles.calendarIcon }/>
                                                        </View>
                                                        {experience.toggleCalendar2 && (
                                                             <Datepicker
                                                             parentCallback={data => this.handleFinishDate(data, index)}/>
                                                        )}
                                                    </View>
                                                
                                                    <View style={ descriptionBoxStyles.content }>
                                                        <View style={ descriptionBoxStyles.tabs }>
                                                            <TouchableOpacity style={ descriptionBoxStyles.tabsItem } onPress={() => this.handleVideoTab(index)}>
                                                                <Etapa1VideoSvg/>
                                                            </TouchableOpacity>
                                                            <View style={ descriptionBoxStyles.bar } />
                                                            <TouchableOpacity style={ descriptionBoxStyles.tabsItem } onPress={() => this.handleTextTab(index)}>
                                                                <Etapa1TextoSvg/>
                                                            </TouchableOpacity>
                                                        </View>
                                                
                                                        <View style={ descriptionBoxStyles.desc }>
                                                            {experience.tabs === true ?
                                                                <View style={descriptionBoxStyles.textAreaContainer} >
                                                                    <TextInput multiline={true} numberOfLines={7}  style={ descriptionBoxStyles.textarea } placeholder={ 'Envie um vídeo sobre seu emprego e suas experiências' } onChangeText={text => onChangeText(text)} />
                                                                </View>
                                                                :
                                                                <View style={descriptionBoxStyles.textAreaContainer} >
                                                                    <TextInput multiline={true} numberOfLines={7} onBlur={() => this.sendDataToParent()} style={ descriptionBoxStyles.textarea } placeholder="Escreva uma breve descrição sobre seu emprego e suas experiências" onChangeText={text => handleDescriptionText(index, text)} />
                                                                </View>
                                                            }
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            <View>
                                <TouchableOpacity style={ styles.accordion } onPress={() => this.toggleNewExperience()}>
                                    <Text style={[ styles.accordionTitle, styles.newTitle ]}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </ScrollView>
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

export {Etapa3}
