import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { adicionalService  } from '../../../../services';
import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa2 = (props) => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [school, setSchool] = useState('');
    const [literate, setLiterate] = useState('');
    const [adicionais, setAdicionais] = useState([]);
    const [shoolLevels, setSchoolLevels] = useState([]);
    const [literateLevels, setLiterateLevels] = useState([]);

    useEffect(() => {
        fetchAdicionalList();
    }, []);


    const fetchAdicionalList = async () => {
        try {
            const adicionalRes = await adicionalService.getAdicionalList();
            if (adicionalRes.data) {
                setSchoolLevels(adicionalRes.data.slice(12, 17));
                setLiterateLevels(adicionalRes.data.slice(18, 21));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleShoolSelected = (nomeAdicional, codAdicional) => {
        const arr = adicionais;
        if (arr.length > 0) {
            for (const element of arr) {
                if (!element.tipo || element.tipo != "school") {
                    arr.length < 2 && arr.push({tipo: "school", codAdicional: codAdicional});
                }else{
                    element.codAdicional = codAdicional;
                }
            };
        }else{
            arr.length < 2 && arr.push({tipo: "school", codAdicional: codAdicional});
        }

        setActive1(false);
        setSchool(nomeAdicional);
        setAdicionais(arr);
        props.parentCallback(arr);
    }

    const handleLiterateSelected = (nomeAdicional, codAdicional)  => {
        const arr = adicionais;
        if (arr.length > 0) {
            for (const element of arr) {
                if (!element.tipo || element.tipo != "literate") {
                    arr.length < 2 && arr.push({tipo: "literate", codAdicional: codAdicional});
                }else{
                    element.codAdicional = codAdicional;
                }
            };
        }else{
            arr.length < 2 && arr.push({tipo: "literate", codAdicional: codAdicional});
        }

        setActive2(false);
        setLiterate(nomeAdicional);
        setAdicionais(arr);
        props.parentCallback(arr);
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
                            <TouchableOpacity key={schoolLevel.codAdicional} style={ styles.item } onPress={() => handleShoolSelected(schoolLevel.nomeAdicional, schoolLevel.codAdicional)}>
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
                            <TouchableOpacity key={literateLevel.codAdicional} style={ styles.item } onPress={() => handleLiterateSelected(literateLevel.nomeAdicional,literateLevel.codAdicional)}>
                                <Text style={ styles.itemText }>{literateLevel.nomeAdicional}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            }
        </View>
    );
};