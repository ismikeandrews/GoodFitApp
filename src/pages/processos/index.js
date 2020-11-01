import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { candidaturaService, authService, vagaService, empresaService, profissaoService } from '../../services'
import { Variables, Help, Menu } from '../../shared'
import { CandidaturaTodosSvg, CandidaturaAprovadoSvg, CandidaturaAndamentoSvg, CandidaturaFinalizadoSvg, CurriculoSvg, MenuVagasSvg } from '../../assets'
import styles from './styles'

export default Processos = (props) => {
    const [candidaturas, setCandidaturas] = useState([])
    const [isCurriculoSet, setIsCurriculoSet] = useState(false)

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          fetchData()
        });
    
        return unsubscribe;
      }, [props.navigation]);

      const fetchData = async () => {
        try {
            let arr = []
            const { codCandidato, curriculo } = await authService.getData()
            const candidaturaList = await candidaturaService.getCandidaturasByCodCandidato(codCandidato)
            for (const element of candidaturaList) {
                const { codEmpresa, codProfissao } = await vagaService.getVaga(element.codVaga)
                const { nomeFantasiaEmpresa } = await empresaService.getEmpresa(codEmpresa)
                const { nomeProfissao } = await profissaoService.getProfissaoByProfissaoId(codProfissao)
                element.nomeFantasiaEmpresa = nomeFantasiaEmpresa
                element.nomeProfissao = nomeProfissao
                arr.push(element)
            }
            setCandidaturas(arr)
            setIsCurriculoSet(curriculo.isSet)
        } catch (error) {
            console.log(error)
        }
      }

      const showOptions = () => {
          if (candidaturas.length > 0) {
              return (
                  <View>
                      {candidaturas.map(candidatura => (
                          <TouchableOpacity key={candidatura.codCandidatura} style={ styles.vagaItem }
                          onPress={() => props.navigation.navigate('ProcessosVaga',{ codCandidatura: candidatura.codCandidatura })}>
                              <Image style={ styles.logo } source={require('../../assets/images/empresas/empresa-colegio.jpg')} />
                              
                              <View style={ styles.desc }>
                                  <Text style={ styles.cargo }>{candidatura.nomeFantasiaEmpresa}</Text>
                                  <Text style={ styles.nome }>{candidatura.nomeProfissao}</Text>
                                  
                                  <View style={ styles.statusBox }>
                                      <Text style={[ styles.dot, styles.dotAndamento ]}>●</Text>
                                      <Text style={ styles.status }>Em análise...</Text>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      ))}
                  </View>
              )
          }
          if (candidaturas.length === 0 && isCurriculoSet) {
              return (
                <View style={ styles.vagaEmpty }>
                    <MenuVagasSvg style={ styles.icon }/>
                    <Text style={[ styles.text, styles.message ]}>Não há nenhum processo ocorrendo no momento</Text>
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => props.navigation.navigate('Vagas')}>
                        <Text style={[ Variables.btnText, styles.btnText ]}>Selecione uma vaga</Text>
                    </TouchableOpacity>
                </View>
              )
          }
          if (isCurriculoSet === false) {
              return (
                <View style={ styles.vagaEmpty }>
                    <CurriculoSvg style={ styles.icon }/>
                    <Text style={[ styles.text, styles.message ]}>Para continuar cadastre um currículo</Text>
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                    onPress={() => props.navigation.navigate('CadastroCurriculo')}>
                        <Text style={[ Variables.btnText, styles.btnText ]}>Cadastro do currículo</Text>
                    </TouchableOpacity>
                </View>
              )
          }
      }

      return(
        <View style={ styles.container }>
            <Menu {...props}/>
            <View style={ styles.content }>
                <View style={ styles.header }>
                    <Text style={[ styles.text, styles.title ]}>Status das candidaturas</Text>
                    <Text style={[ styles.text, styles.subtitle ]}>Acompanhe os processos das suas candidaturas</Text>

                    <View style={ styles.tabs }>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAll ]}
                            onPress={() => console.log('clicked')}>
                            <CandidaturaTodosSvg style={ styles.icon }/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAprovado ]}
                            onPress={() => console.log('clicked')}>
                            <CandidaturaAprovadoSvg style={ styles.icon }/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabAndamento ]}
                            onPress={() => console.log('clicked')}>
                            <CandidaturaAndamentoSvg style={ styles.icon }/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.tabItem, styles.tabReprovado ]}
                            onPress={() => console.log('clicked')}>
                            <CandidaturaFinalizadoSvg style={ styles.icon }/>   
                        </TouchableOpacity>
                    </View>
                </View>
                
                <SafeAreaView style={ styles.contentVagas }>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.vagas }>
                        
                           {showOptions()}    
        
                        </View>

                    </ScrollView>

                </SafeAreaView>
                <Help/>
            </View>
        </View>
    )
}
