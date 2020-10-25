import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { adicionalService  } from '../../../../services'
import { Variables } from '../../../../shared'
import styles from './styles'

export default Etapa2 = () => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [school, setSchool] = useState('');
    const [literate, setLiterate] = useState('');
    const [shoolLevels, setSchoolLevels] = useState([])
    const [literateLevels, setLiterateLevels] = useState([])

    useEffect(() => {
        fetchAdicionalList()
    }, [])

    const fetchAdicionalList = async () => {
        try {
            const adicionalRes = await adicionalService.getAdicionalList();
            if (adicionalRes.data) {
                setSchoolLevels(adicionalRes.data.slice(12, 17))
                setLiterateLevels(adicionalRes.data.slice(18, 21))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Requisitos</Text>
            <Text style={ Variables.subtitle }>Formações básicas em...</Text>

            <TouchableOpacity style={ styles.select }
            onPress={() => {active1 === false ? setActive1(true) : setActive1(false)}}>
                <View style={ styles.selectItem }>
                    <Image style={ styles.image } source={require('../../../../assets/images/icons/requisitos/escolaridade.png')} />
                    <Text style={ styles.label }>{school ? school : "Nivel de escolaridade"}</Text>
                </View>
            </TouchableOpacity>
            {active1 === true &&
                <View style={ styles.list }>
                    <View style={ styles.listContent }>
                        {shoolLevels.map( schoolLevel => (
                            <TouchableOpacity key={schoolLevel.codAdicional} style={ styles.item } onPress={() => { setSchool(schoolLevel.nomeAdicional), setActive1(false)}}>
                                <Text style={ styles.itemText }>{schoolLevel.nomeAdicional}</Text>
                            </TouchableOpacity>
                        ))}
                        
                    </View>
                </View>
            }
            <TouchableOpacity style={ styles.select }
            onPress={() => {active2 === false ? setActive2(true) : setActive2(false)}}>
                <View style={ styles.selectItem }>
                    <Image style={ styles.image } source={require('../../../../assets/images/icons/requisitos/alfabetizacao.png')} />
                    <Text style={ styles.label }>{literate ? literate : "Nivel de alfabetização"}</Text>
                </View>
            </TouchableOpacity>
            {active2 === true &&
                <View style={ styles.list }>
                    <View style={ styles.listContent }>
                        {literateLevels.map(literateLevel => (
                            <TouchableOpacity key={literateLevel.codAdicional} style={ styles.item } onPress={() => { setLiterate(literateLevel.nomeAdicional), setActive2(false)}}>
                                <Text style={ styles.itemText }>{literateLevel.nomeAdicional}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            }
        </View>
    );
};