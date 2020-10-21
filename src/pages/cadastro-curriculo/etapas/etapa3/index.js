import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Xp } from '../../../../shared'

import { Variables } from '../../../../shared'
import styles from './styles'

class Etapa3 extends React.Component {

    state = {
        no: false,
        yes: false,
        accordion: false,
        new: []
    }

    newAccordion(){
         let xp = this.state.new;
         if(xp.length <= 6){
            xp.push(
                <View>
                    <TouchableOpacity style={[ this.state.accordion === false ? styles.accordion : [styles.accordion, styles.accordionActive] ]}
                    onPress={() => this.setState({ accordion : ! this.state.accordion })}>
                        <Text style={ styles.accordionTitle }>Experiência</Text>
                    </TouchableOpacity>
                    <View style={[ this.state.accordion === false ? styles.xp : styles.xpActive ]}>
                        <Xp></Xp>
                    </View>
                </View>
            )
            this.setState({new: xp})
         }  else {
            Alert.alert(
                "Alerta",
                "Não é possivel criar mais campos",
                [
                  { text: "OK", onPress: () => console.log("Ok") }
                ],
                { cancelable: false }
              );
         }
         
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ Variables.title }>Experiência profissional</Text>
                <Text style={ Variables.subtitle }>Você já trabalhou antes? Conte-nos um pouco...</Text>
    
                <View style={ this.state.yes === false ? styles.content : [styles.content, styles.yes] }>
                    <TouchableOpacity style={[ this.state.no === false ? styles.btn : [styles.btn, styles.btnActive] ]}
                    onPress={() => this.setState( this.state.yes === true ? this.setState({ yes: false, no: true }) : this.setState({ yes: false, no: true }) )}>
                        <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                        <Text style={ styles.label }>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[ this.state.yes === false ? styles.btn : [styles.btn, styles.btnActive] ]}
                    onPress={() => this.setState( this.state.no === true ? this.setState({ no: false, yes: true }) : this.setState({ no: false, yes: true }) )}>
                        <Image style={ styles.icon } source={require('../../../../assets/images/ijc.png')} />
                        <Text style={ styles.label }>Sim</Text>
                    </TouchableOpacity>
                </View>
                
                { this.state.yes === true ?
                    <View>
                        {this.state.new.map(teste => teste)}
                        <TouchableOpacity style={ styles.accordion } onPress={() => this.newAccordion()}>
                            <Text style={[ styles.accordionTitle, styles.newTitle ]}>+</Text>
                        </TouchableOpacity>
                    </View>
                :
                    null
                }
            </View>
        )
    }
}

export {Etapa3}