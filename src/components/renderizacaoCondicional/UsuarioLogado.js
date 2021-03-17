import React from 'react'
import { Text } from 'react-native'
import If from './if'

export default ({ usuario = {}}) => {
    return (
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>
    )
}