import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { DescriptionBox, IconBox, Formacao, Variables } from '../../shared'

import styles from './styles'

class Curriculo extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <SafeAreaView style={ styles.container }>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.header }>
                            <Text style={[ styles.text, styles.title ]}>Meu currículo</Text>
                            <Text style={[ styles.text, styles.subtitle ]}>Um pouco sobre mim...</Text>
                        </View>

                        <DescriptionBox></DescriptionBox>

                        <View style={[ styles.item, styles.requisitos ]}>
                            <Text style={[ styles.text, styles.topic ]}>Requisitos</Text>
                            <Text style={[ styles.text, styles.desc ]}>Minhas formações básicas em...</Text>

                            <Formacao img='requisitos/escolaridade.png' title='Escolaridade' value='Ensino superior completo'></Formacao>
                            <Formacao img='requisitos/alfabetizacao.png' title='Alfabetização' value='Alfabetizado'></Formacao>
                        </View>

                        <View style={[ styles.item, styles.habilidades ]}>
                            <Text style={[ styles.text, styles.topic ]}>Habilidades</Text>
                            <Text style={[ styles.text, styles.desc ]}>Eu sou bom com...</Text>
                            
                            <View style={ styles.list }>
                                {/* <IconBox name='Comunicação' img='habilidades/comunicativo.png'></IconBox>
                                <IconBox name='Códigos' img='habilidades/html.png'></IconBox>
                                <IconBox name='Raciocínio' img='habilidades/inteligente.png'></IconBox>
                                <IconBox name='Organização' img='habilidades/organizacao.png'></IconBox> */}
                            </View>
                        </View>

                        <View style={[ styles.item, styles.objetivo ]}>
                            <Text style={[ styles.text, styles.topic ]}>Objetivo profissional</Text>
                            <Text style={[ styles.text, styles.desc ]}>Gostaria de trabalhar com...</Text>
                            
                            <View style={ styles.list }>
                                {/* <IconBox name='Educação' img='profissao/livros.png'></IconBox>
                                <IconBox name='Esportes' img='profissao/esportes.png'></IconBox>
                                <IconBox name='TI' img='profissao/ti.png'></IconBox> */}
                            </View>
                        </View>

                        <View style={ styles.list }>
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
        )
    }
}

export { Curriculo }