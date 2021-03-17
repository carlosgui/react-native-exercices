import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Style from '../estilo'
import MegaSenaNumbers from './MegaSenaNumbers'

export default class MegaSena extends Component {
    state = {
        numberAmount: this.props.numberAmount,
        generatedNumbers: []
    }

    changeAmoutOfNumbersToRandom = (qtde) => {
        this.setState({ numberAmount: qtde })
    }

    generateRandomNumberBetweenZeroSixty = number => {
        const newNumber = parseInt(Math.random() * 25) + 1
        return number.includes(newNumber) ? this.generateRandomNumberBetweenZeroSixty(number) : newNumber
    }

    generateNumbersActionButton = () => {
        const generatedNumbers = Array(this.state.numberAmount)
                                    .fill()
                                    .reduce(value => [...value, this.generateRandomNumberBetweenZeroSixty(value)], [])
                                    .sort((a,b) => a - b)

        this.setState({generatedNumbers})
    }

    showNumbers = () => {
        const nums = this.state.generatedNumbers
        return nums.map(value => {
           return <MegaSenaNumbers numb={value}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Style.title}>
                    Gerador de números da sorte
                </Text>
                <Text style={Style.apptext}>
                    Gerando {this.state.numberAmount} números
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1, fontSize: 20, margin: 10}}
                    placeholder="Alterar Quantidade" 
                    value={this.state.numberAmount}
                    onChangeText={this.changeAmoutOfNumbersToRandom}
                />
                <Button 
                    title='Gerar'
                    onPress={this.generateNumbersActionButton}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.showNumbers()}
                </View>
                
            </>
        )
    }
}