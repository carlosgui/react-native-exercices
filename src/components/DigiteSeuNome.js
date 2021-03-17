import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <TextInput 
                placeholder="Digite seu nome" 
                value={nome}
                onChange={nome => setNome(nome)} />
        </View>
    )
}