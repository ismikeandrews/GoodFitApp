import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { authService, vagaService, candidaturaService } from '../../services';
import { Vaga } from './component';
import { Variables, Menu, Help } from '../../shared';
import styles from './styles';
import { CurriculoSvg } from '../../assets'
import moment from 'moment';

export default Vagas = (props) => {
    const [isCurriculoSet, setIsCurriculoSet] = useState(false)
    const [vagas, setVagas] = useState([])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            fetchAuthData()
        });
    
        return unsubscribe;
    }, [props.navigation]);

    const callback = async (childData) => {
        const { codCandidato } = await authService.getData()
        let arr = vagas;
        arr = arr.filter(vaga => {
            return vaga.codVaga !== childData
        })
        const candidaturaObj = {
            codCandidato,
            codVaga: childData,
            dataCandidatura: moment().unix()
        }
        await candidaturaService.setCandidatura(candidaturaObj);
        setVagas(arr)
    }

    const fetchAuthData = async () => {
        try {
            const { curriculo, codCandidato } = await authService.getData();
            if (curriculo.isSet) {
                let arr = [];
                const candidaturas = await candidaturaService.getCandidaturasByCodCandidato(codCandidato)
                const vagaBanList = candidaturas.map(candidatura => candidatura.codVaga)
                const vagaRes = await vagaService.match(codCandidato, curriculo.codCurriculo);
                for (const vaga of vagaRes.data) {
                    let index = vagaBanList.indexOf(vaga.codVaga)
                    index < 0 && arr.push(vaga)
                }
                setIsCurriculoSet(curriculo.isSet)
                setVagas(arr)
            }else{
                setIsCurriculoSet(curriculo.isSet)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const renderVagas = () => {
        if(vagas.length === 0){
            return (
                <View>
                    <Text style={ styles.text }>
                        Nenhuma vaga encontrada no momento 😢
                    </Text>
                        
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => console.log('click')}>
                        <Text style={[ Variables.btnText, styles.btnText ]}>Ative as notificações</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return (
                <SafeAreaView style={ styles.slider } >
                    <ScrollView style={ styles.scrollView } horizontal>
                        {vagas.map(vaga => (
                            <Vaga key={vaga.codVaga} style={ styles.first } properties={vaga} parentCallback={callback}></Vaga>
                        ))}
                    </ScrollView>
                </SafeAreaView> 
            )
        }
    }

    return(
        <View style={ styles.container }>
            <Menu {...props}/>
            <View style={ styles.content }>
            
                {isCurriculoSet ?
                    <View>
                        {renderVagas()}
                    </View>
                    : 
                    <SafeAreaView>
                    <View style={ styles.contentEmpty }>
                        <CurriculoSvg style={ styles.icon } />
                        <Text style={ styles.text }>
                            Para continuar cadastre um currículo
                        </Text>
                        <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                        onPress={() => props.navigation.navigate('CadastroCurriculo')}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar do curriculo</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                }
            </View>
            <Help/>
        </View> 
    );
}