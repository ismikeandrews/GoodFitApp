import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { DescriptionBox, IconBox, Formacao, Variables, Menu, Help } from '../../shared'

import styles from './styles'

class Curriculo extends Component{
    render(){
        return(
            <View>
                <Menu {...this.props}/>
                <View style={ styles.container }>
                    <SafeAreaView style={ styles.safeArea }>
                        <ScrollView style={ styles.scrollView }>
                            <View style={ styles.header }>
                                <Text style={[ styles.text, styles.title ]}>Meu currículo</Text>
                                <Text style={[ styles.text, styles.subtitle ]}>Um pouco sobre mim...</Text>
                            </View>

                            <DescriptionBox></DescriptionBox>

                            <View style={[ styles.item, styles.requisitos ]}>
                                <Text style={[ styles.text, styles.topic ]}>Requisitos</Text>
                                <Text style={[ styles.text, styles.desc ]}>Minhas formações básicas em...</Text>

                                <Formacao tipo={true} title='Escolaridade' value='Ensino superior completo'></Formacao>
                                <Formacao tipo={false} title='Alfabetização' value='Alfabetizado'></Formacao>
                            </View>

                            <View style={[ styles.item, styles.habilidades ]}>
                                <Text style={[ styles.text, styles.topic ]}>Habilidades</Text>
                                <Text style={[ styles.text, styles.desc ]}>Eu sou bom com...</Text>
                                
                                <View style={ styles.list }>
                                    <IconBox name='Comunicação' tipo="habilidade" img='comunicativo'></IconBox>
                                    {/* <IconBox name='Códigos' tipo="habilidade" img='html'></IconBox> */}
                                    <IconBox name='Raciocínio' tipo="habilidade" img='inteligente'></IconBox>
                                    <IconBox name='Organização' tipo="habilidade" img='organizacao'></IconBox>
                                </View>
                            </View>

                            <View style={[ styles.item, styles.objetivo ]}>
                                <Text style={[ styles.text, styles.topic ]}>Objetivo profissional</Text>
                                <Text style={[ styles.text, styles.desc ]}>Gostaria de trabalhar com...</Text>
                                
                                <View style={ styles.list }>
                                    <IconBox name='Educação' img='livros'></IconBox>
                                    <IconBox name='Esportes' img='esportes'></IconBox>
                                    <IconBox name='TI' img='ti'></IconBox>
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
                    </SafeAreaView>
                </View>
                <Help/>
            </View>
        )
    }
}

export { Curriculo }