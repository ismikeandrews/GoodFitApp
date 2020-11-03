import React, {Component, useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { DescriptionBox, IconBox, Formacao, Variables, Menu, Help, EmptyCv } from '../../shared'
import { curriculoService, authService } from '../../services'
import { Etapa1VideoSvg, Etapa1TextoSvg } from '../../assets'
import styles from './styles'

export default Curriculo = (props) => {
    const [descricaoCurriculo, setDescricaoCurriculo] = useState('')
    const [school, setSchool] = useState({})
    const [literate, setLiterate] = useState({})
    const [adicionais, setAdicionais] = useState([])
    const [cargos, setCargos] = useState([])
    const [curriculo, setCurriculo] = useState({})
    const [tabs, setTabs] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          fetchData()
        });
    
        return unsubscribe;
    }, [props.navigation]);

    const fetchData = async () => {
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
                        setSchool(element)
                    }
                    if (literateIndex > -1) {
                        setLiterate(element)
                    }
                    if (literateIndex < 0 && schoolIndex < 0) {
                        filteredAdicionais.push(element)
                    }
                }
                setDescricaoCurriculo(curriculoRes.data.descricaoCurriculo)
                setAdicionais(filteredAdicionais)
                setCargos(cargoRes.data)
                setCurriculo(authData.curriculo)
                setIsLoading(false)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View>
            <Menu {...props}/>
            <View style={ styles.container }>
                {isLoading ? <ActivityIndicator style={ styles.load } size="large" color="#9d1d64"/> :
                <>
                    {curriculo.isSet ?
                        <SafeAreaView style={ styles.safeArea }>
                            <ScrollView style={ styles.scrollView }>
                                <View style={ styles.header }>
                                    <Text style={[ styles.text, styles.title ]}>Meu currículo</Text>
                                    <Text style={[ styles.text, styles.subtitle ]}>Um pouco sobre mim...</Text>
                                </View>

                                <View style={ styles.description }>
                                    <View style={ styles.tabs }>
                                        <TouchableOpacity style={ styles.tabsItem } onPress={() => setTabs(true)}>
                                            <Etapa1VideoSvg/>
                                        </TouchableOpacity>
                                        <View style={ styles.bar } />
                                        <TouchableOpacity style={ styles.tabsItem } onPress={() => setTabs(false)}>
                                            <Etapa1TextoSvg/>
                                        </TouchableOpacity>
                                    </View>
                            
                                    <View style={ styles.desc }>
                                        {tabs === true ?
                                            <View style={ styles.boxContainer } >
                                                <Image style={ styles.box } source={require('../../assets/images/icons/video.png')} />
                                            </View>
                                            :
                                            <View style={ styles.boxContainer } >
                                                <Text style={ styles.box }>{descricaoCurriculo}</Text>
                                            </View>
                                        }
                                    </View>
                                </View>

                                <View style={[ styles.item, styles.requisitos ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Requisitos</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Minhas formações básicas em...</Text>

                                    <Formacao tipo={true} title='Escolaridade' value={school.nomeAdicional}/>
                                    <Formacao tipo={false} title='Alfabetização' value={literate.nomeAdicional}/>
                                </View>

                                <View style={[ styles.item, styles.habilidades ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Habilidades</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Eu sou bom com...</Text>
                                    
                                    <View style={ styles.list }>
                                        {adicionais.map(adicional => (
                                            <IconBox key={adicional.codAdicional} name={adicional.nomeAdicional} tipo="habilidade" img={adicional.imagemAdicional}/>
                                        ))}
                                    </View>
                                </View>

                                <View style={[ styles.item, styles.objetivo ]}>
                                    <Text style={[ styles.text, styles.topic ]}>Objetivo profissional</Text>
                                    <Text style={[ styles.text, styles.desc ]}>Gostaria de trabalhar com...</Text>
                                    
                                    <View style={ styles.list }>
                                        {cargos.map(cargo =>
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
                                    onPress={() => props.navigation.push('UpdateCurriculo')}>
                                        <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </SafeAreaView> 
                        :
                        <View style={ styles.emptycv }>
                            <EmptyCv {...props}/>
                        </View>
                    }  
                </>
                } 
            </View>
            <Help/>
        </View>
    )
}